'use strict'

const hljs = require('highlight.js')
const escape = require('escape-html')
const jsdom = require('jsdom')

const JSDOM = jsdom.JSDOM
hljs.configure({hideUpgradeWarningAcceptNoSupportOrSecurityUpdates: true})

exports.name = 'highlight.js'
exports.inputFormats = ['code', 'highlight', 'highlightjs', 'highlight.js']
exports.outputFormat = 'html'

exports.render = function (str, options) {
  options = options || {}

  const isLanguageSupported = Boolean(hljs.getLanguage(options.lang))
  const languageClass = (options.auto || !options.lang) ? '' : `language-${options.lang}`

  if (options.auto === false && !isLanguageSupported) {
    return escape(str)
  }

  if (!options.auto && options.lang && !isLanguageSupported) {
    return escape(str)
  }

  const node = `<pre><code class="${languageClass}">${str}</code></pre>`
  const dom = new JSDOM(node)
  const document = dom.window.document
  global.document = document

  const el = document.querySelector('code')
  hljs.highlightBlock(el)

  return el.innerHTML
}
