'use strict'
const http = require('http')
let url = process.argv[2]
http.get(url, function(res) {
	res.on('data', function(data){
		let chunk = data.toString('utf-8')
		console.log(chunk)
	})
	res.on('error', console.error)
})
