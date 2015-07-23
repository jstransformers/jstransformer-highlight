# jstransformer-highlight

[Highlight.js](http://highlightjs.org) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-highlight/master.svg)](https://travis-ci.org/jstransformers/jstransformer-highlight)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-highlight/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-highlight?branch=master)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-highlight/master.svg)](http://david-dm.org/jstransformers/jstransformer-highlight)
[![NPM version](https://img.shields.io/npm/v/jstransformer-highlight.svg)](https://www.npmjs.org/package/jstransformer-highlight)

## Installation

    npm install jstransformer-highlight

## API

```js
var highlight = require('jstransformer')(require('jstransformer-highlight'))

highlight.render('var i = 5 + 10;', { lang: 'javascript' }).body
//=> '<span class=\"hljs-variable\"><span class=\"hljs-keyword\">var</span> i</span> = <span class=\"hljs-number\">5</span> + <span class=\"hljs-number\">10</span>;'
```

## License

MIT
