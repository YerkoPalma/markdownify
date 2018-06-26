'use strict'
const through = require('through')
const MarkdownIt = require('markdown-it')
const meta = require('markdown-it-meta')

module.exports = function markdownify (file, opts) {
  if (!/.md$|.markdown$/.test(file)) {
    return through()
  }
  let data = ''

  let stream = through(write, end)

  function write (buf) {
    data += buf
  }

  function end () {
    const md = new MarkdownIt()
    md.use(meta)
    if (opts.plugins) {
      if (Array.isArray(opts.plugins)) {
        for (let plugin of opts.plugins) {
          md.use(require(plugin))
        }
      } else {
        md.use(require(opts.plugins))
      }
    }

    let document = md.render(data)

    stream.queue(`
    module.exports = {
      document: \`${document}\`,
      meta: ${JSON.stringify(md.meta)}
    }`)
    stream.queue(null)
  }
  return stream
}
