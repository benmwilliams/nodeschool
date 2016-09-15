'use strict'
let nums = process.argv.slice(2)
let min = Math.min(...nums)
console.log(`The minimum of [${nums}] is ${min}`)
