'use strict'

const hljs = require('highlight.js')
const escape = require('escape-html')

exports.name = 'highlight.js'
exports.inputFormats = ['code', 'highlight', 'highlightjs', 'highlight.js']
exports.outputFormat = 'html'

exports.render = function (str, options) {
  options = options || {}
  if (options.lang) {
    try {
      return hljs.highlight(options.lang, str).value
    } catch (error) { // eslint-disable-line no-unused-vars
      // Do nothing.
    }
  }

  if (options.auto || (options.auto !== false && !options.lang)) {
    try {
      return hljs.highlightAuto(str).value
    } catch (error) { // eslint-disable-line no-unused-vars
      // Do nothing.
    }
  }

  return escape(str)
}
