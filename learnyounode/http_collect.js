'use strict'
const bl = require('bl')
const http = require('http')
let url = process.argv[2]
http.get(url, function(res) {
	res.pipe(bl(function(err, data){
		if (err) {
			console.log(err)
		} else {
			let chunk = data.toString('utf-8')
			console.log(chunk.length)
			console.log(chunk)
		}
	}))
})
