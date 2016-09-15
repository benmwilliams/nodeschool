'use strict'
const http = require('http')
const bl = require('bl')
let url1 = process.argv[2]
let url2 = process.argv[3]
let url3 = process.argv[4]
let strings = []
let print = function() {
	if (strings.length === 3) {
		console.log(strings[0])
		console.log(strings[1])
		console.log(strings[2])
		strings = []
	}
}

http.get(url1, function(res){
	res.pipe(bl(function(err, data){
		if (err){
			console.log(err)
		} else {
			let chunk = data.toString('utf-8')
			strings[0] = chunk
			print()
		}
	}))
})

http.get(url2, function(res){
	res.pipe(bl(function(err, data){
		if (err){
	                console.log(err)
                } else {
                        let chunk = data.toString('utf-8')
                        strings[1] = chunk
                        print()
                }
        }))
})

http.get(url3, function(res){
	res.pipe(bl(function(err, data){
                if (err){
                        console.log(err)
                } else {
                        let chunk = data.toString('utf-8')
                        strings[2] = chunk
                        print()
                }
        }))
})



