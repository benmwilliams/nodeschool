'use strict'
const path = require('path')
const mymodule = require('./mymodule')
let dir = process.argv[2]
let ext = process.argv[3]

var callback = function(err, list) {
	if (err) throw err
	list.forEach(function(file){
		console.log(file)
	})
}

mymodule(dir, ext, callback)
