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

description ![meow](http://placekitten.com/g/300)
`.trim();

getImage(input).alt;  // meow
getImage(input).src;  // http://placekittern.com/g/300
getImage(input).html; // <img src="http://placekitten.com/g/300" alt="meow" />

getImage('').alt;  // undefined
getImage('').src;  // undefined
getImage('').html; // undefined
```

## API

### getImage(input)

#### input

*Required*  
Type: `String`

Markdown string.

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
