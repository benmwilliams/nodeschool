'use strict'
const fs = require('fs')

function run(generator) {
	
}

run function* (done) {
	var dirFiles = yield fs.readdir('NoNoNoNo', done)
	var firstFile = dirFiles[0]

	console.log(firstFile)
}
