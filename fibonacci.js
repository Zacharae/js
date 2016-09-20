/*
	FIBONACCI
	
	Create a function that takes a number n and returns the nth number in the Fibonacci sequence.
	
	The Fibonacci sequence is a series of numbers, where each number is the sum of the two numbers preceding it.
	
	Ex)
		1, 1, 2, 3, 5, 8, 13, 21, 34, 55....
		
*/

var fib = function(n) {
	var first=1, second=1, fibonacci=1;
	for (var i=2; i<n; i++) {
		fibonacci = first + second ;
		first = second ;
		second = fibonacci ;
	}
	return fibonacci;
}
console.log(fib(10))