// this solution is a little more complicated than the official one.
// I definitely over thought it, but my solution actually runs the factorial
// operation and then outputs in the reverse order, which, IMO is
// more 'modular' than the official solution. Just comment out the while loop
// and you have a generator that gives the factorial of a given arg.
'use strict'
function *factorial(n) {
	let num = n
	let i = 1
	let factorial = n => (n < 2) ? 1 : n * factorial(n-1)
	while (i <= num) {
		yield factorial(i)
		i++
	}
}

for (var n of factorial(5)) {
	console.log(n)
}
