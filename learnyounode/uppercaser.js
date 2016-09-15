'use strict'
const http = require('http')
const map = require('through2-map')
let server = http.createServer(function(req, res){
	// TODO: if method !== 'POST', return error message
	if (req.method === 'POST') {
		req.pipe(map(function(chunk){
			return chunk.toString().toUpperCase()
		})).pipe(res)
	}
})

server.listen(process.argv[2])
