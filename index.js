'use strict'

var hljs = require('highlight.js')
var escape = require('escape-html')

exports.name = 'highlight.js'
exports.inputFormats = ['code', 'highlight', 'highlightjs', 'highlight.js']
exports.outputFormat = 'html'

exports.render = function (str, options) {
  options = options || {}
  if (options.lang) {
    try {
      return hljs.highlight(options.lang, str).value
    } catch (err) {}
  }
  if (options.auto || (options.auto !== false && !options.lang)) {
    try {
      return hljs.highlightAuto(str).value
    } catch (err) {}
  }
  return escape(str)
}
