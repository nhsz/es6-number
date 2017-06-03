# es6-number

[![NPM](https://nodei.co/npm/es6-number.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/es6-number/)

> Check if a value is a number, including every **[`'number'`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)** type


## Install

```
$ npm install --save es6-number
```


## Usage

```js
const isNumber = require('es6-number')

console.log(isNumber(-1))
// => true

console.log(isNumber(0))
// => true

console.log(isNumber(1))
// => true

console.log(isNumber('123'))
// => false

console.log(isNumber(Infinity))
// => true

console.log(isNumber(-Infinity))
// => true

console.log(isNumber(NaN))
// => false

console.log(isNumber(null))
// => false
```


## License

MIT © **[`Nicolás Quiroz`](https://nicolasquiroz.com)**
