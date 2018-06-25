const browserify = require('browserify')
const markdownify = require('../')
const fs = require('fs')

browserify('./doc.js')
  .transform(markdownify)
  .bundle()
  .pipe(fs.createWriteStream('bundle.js'))
