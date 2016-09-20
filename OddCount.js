/*
	Odd Count
	
	Create a function that takes a number as input. The function should log all the odd numbers between 0 and the input (positive or negative)
	
	You may not use and control flow within the body of any loops
*/

function logOdd(n) {
	// if (n>0){
	// for (var i=0; i<n; i++){
	// 	if(i%2 !== 0) console.log(i); }
	// } else {
	// 	for (var z=0; z>n; z--)
	// 	if(z%2 !== 0) console.log(z)
	// }	
	var posN = Math.abs(n)
	for (var i=0; i<posN; i++) {
		if(i%2 !== 0) console.log(i*(n/posN))
	}
}	

logOdd(-19)