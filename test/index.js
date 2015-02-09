'use strict';

var assert = require('assert');
var fs = require('fs');
var highlight = require('../');

var input = fs.readFileSync(__dirname + '/input.js', 'utf8');
var expected = fs.readFileSync(__dirname + '/expected.js', 'utf8');
var escaped = fs.readFileSync(__dirname + '/escaped.js', 'utf8');

var auto = highlight.render(input);
fs.writeFileSync(__dirname + '/output.auto.js', auto);
var js = highlight.render(input, {lang: 'javascript'});
fs.writeFileSync(__dirname + '/output.lang.js', js);
var fallback = highlight.render(input, {lang: 'not a language', auto: true});
fs.writeFileSync(__dirname + '/output.fallback.js', fallback);
var failedA = highlight.render(input, {lang: 'not a language'});
fs.writeFileSync(__dirname + '/output.escape1.js', failedA);
var failedB = highlight.render(input, {auto: false});
fs.writeFileSync(__dirname + '/output.escape2.js', failedB);

assert(auto === expected);
assert(js === expected);
assert(fallback === expected);
assert(failedA === escaped);
assert(failedB === escaped);

console.log('tests passed');
