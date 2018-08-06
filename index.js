'use strict'

var fs = require('fs')
var intoStream = require('into-stream')

function encode(path) {
  return new Promise((resolve, reject) => {
    var rs = fs.createReadStream(path, {
      encoding: 'base64'
    })
  
    var str = ''
    rs.on('data', function(chuck) {
      str += chuck
    })
  
    rs.on('end', function() {
      resolve(str)
    })
  
    rs.on('error', function() {
      reject('encode fail')
    })
  })
}

function decode(base64String, output) {
  return new Promise((resolve, reject) => {
    var bitmap = new Buffer(base64String, 'base64')
    var rs = intoStream(bitmap)
    var ws = fs.createWriteStream(output)

    rs.on('end', function() {
      resolve(output)
    })

    rs.on('error', function() {
      reject('decode fail')
    })

    rs.pipe(ws)
  })
}

module.exports = {
  encode: encode,
  decode: decode
}
