# get-md-image

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]

> get image from markdown article

## Install

    npm install --save get-md-image

## Usage

```js
import getImage from 'get-md-image';

const input = `
# title

description ![meow](http://placekitten.com/g/300)`;

getImage(input).alt;  // meow
getImage(input).src;  // http://placekitten.com/g/300
getImage(input).html; // <img src="http://placekitten.com/g/300" alt="meow" />
getImage('');         // undefined ¯\_(ツ)_/¯
```

## API

### getImage(input)

#### input

*Required*  
Type: `String`

Markdown string.

## Related

* [get-md-content][get-md-content] - get content from markdown article
* [get-md-date][get-md-date] - get date from markdown article
* [get-md-desc][get-md-desc] - get description from markdown article
* [get-md-title][get-md-title] - get title from markdown article

## License

MIT © [Vladimir Starkov](https://iamstarkov.com)

[npm-url]: https://npmjs.org/package/get-md-image
[npm-image]: https://img.shields.io/npm/v/get-md-image.svg?style=flat-square

[travis-url]: https://travis-ci.org/iamstarkov/get-md-image
[travis-image]: https://img.shields.io/travis/iamstarkov/get-md-image.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/iamstarkov/get-md-image
[coveralls-image]: https://img.shields.io/coveralls/iamstarkov/get-md-image.svg?style=flat-square

[depstat-url]: https://david-dm.org/iamstarkov/get-md-image
[depstat-image]: https://david-dm.org/iamstarkov/get-md-image.svg?style=flat-square

[get-md-content]: https://github.com/iamstarkov/get-md-content
[get-md-date]: https://github.com/iamstarkov/get-md-date
[get-md-desc]: https://github.com/iamstarkov/get-md-desc
[get-md-title]: https://github.com/iamstarkov/get-md-title
