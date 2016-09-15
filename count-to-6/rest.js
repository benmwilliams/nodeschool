'use strict'
module.exports = function average(...args) {
	var total = 0;
	args.forEach(function(n){total += n})
	return total / args.length
}
