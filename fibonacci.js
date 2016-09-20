var fibonacci = function(num) {
	var x=0, y=1, fib=1;
    for(var i=2; i<num; i++) {
    	fib = x+y;
        x = y;
        y = fib;
    }
    return fib;
}

console.log(fibonacci(10))