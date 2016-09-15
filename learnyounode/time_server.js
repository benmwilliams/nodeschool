'use strict'
const net = require('net')
let portNum = process.argv[2]

function zeroFill(n){return n < 10 ? '0' + n : n}

var server = net.createServer(function(socket){
	let date = new Date()
	let formatted = zeroFill(date.getFullYear()) + '-' +
		zeroFill(date.getMonth() + 1) + '-' +
		zeroFill(date.getDate()) + ' ' +
		zeroFill(date.getHours()) + ':' +
		zeroFill(date.getMinutes()) + '\n'
	socket.end(formatted)
})

server.listen(portNum)
