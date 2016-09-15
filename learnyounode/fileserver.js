'use strict'
const http = require('http')
const fs = require('fs')
let portNum = process.argv[2]
let location = process.argv[3]

let server = http.createServer(function(req, res) {
	// specify sending plain text on 200
	res.writeHead(200, {'content-type': 'text/plain'})
	// create read stream and pipe the results to the response from the server
	fs.createReadStream(location).pipe(res)
})

server.listen(portNum)
