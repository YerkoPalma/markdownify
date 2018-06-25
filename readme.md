# markdownify
[![Build Status](https://img.shields.io/travis/YerkoPalma/markdownify/master.svg?style=flat-square)](https://travis-ci.org/YerkoPalma/markdownify) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/feross/standard)

> convert markdown source to html string with metadata support

## Usage

```bash
$ browserify index.js -t markdownify > bundle.js

# if you want to use plugins
$ browserify index.js -t [ markdownify -p markdown-it-emoji ] > bundle.js
```

Now every require call to a file with extension `md|markdown` will resolve in an 
object

```js
console.log(require('./readme.md'))

// {
    document: <parsed markdown>,
    meta: <meta data>
// }
```
## Install

```bash
$ npm install --save-dev @yerkopalma/markdownify
```

## License
[MIT](/license)
