'use strict'
let inputs = process.argv.slice(2)
var result = inputs.map(x => x[0])
		.reduce((a,b) => a + b)

console.log(`[${inputs}] becomes "${result}"`)
