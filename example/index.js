const browserify = require('browserify')
const markdownify = require('../')
const fs = require('fs')

browserify('./doc.js')
  .transform(markdownify, { plugins: [ 'markdown-it-emoji', 'markdown-it-sub' ] })
  .bundle()
  .pipe(fs.createWriteStream('bundle.js'))
