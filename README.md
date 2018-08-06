<!-- # file-base64 [![Build Status](https://travis-ci.org/forsigner/file-base64.svg?branch=master)](https://travis-ci.org/forsigner/file-base64) [![NPM Version](http://img.shields.io/npm/v/file-base64.svg?style=flat)](https://www.npmjs.org/package/file-base64) -->

- Encode a file to a base64 string using promise
- Decode a base64 string to a file using promise


### Install

``` bash
$ npm install promise-base64 --save
```

## Usage

### Encode

``` js
var base64 = require('promise-base64');

base64.encode('./text.txt')
.then((base64String) => {
    console.log(base64String)
})
.catch((err) => {
    console.log(err)
})
```

Or using await

``` js
const base64String = await base64.encode('./text.txt')
```

### Decode

``` js
var base64String = 'swesh523sfsfgwg';
base64.decode(base64String, 'text.new.txt' function(err, output) {
  console.log('success')
})
```

Or using await
``` js
await base64.encode('./text.txt')
```
