'use strict'
const http = require('http')
const url = require('url')

const routes = {
	"/api/parsetime": function(parsedUrl){
		let date = new Date(parsedUrl.query.iso)
		return {
			hour: date.getHours(),
			minute: date.getMinutes(),
			second: date.getSeconds()
		}
	},
	"/api/unixtime": function(parsedUrl){
		return {unixtime: (new Date(parsedUrl.query.iso).getTime())}
	}
}

let server = http.createServer(function(req, res) {
	let parsedUrl = url.parse(req.url, true)
	let resource = routes[parsedUrl.pathname]

	if (resource) {
		res.writeHead(200, {"content-type": "application/json"})
		res.end(JSON.stringify(resource(parsedUrl)))
	} else {
		res.writeHead(404)
		res.end()
	}
})

server.listen(process.argv[2])
