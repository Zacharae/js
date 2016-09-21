/*Complete the function so that it takes a multidimensional array and converts to an object that makes sense:
{
	typeOfThing1: [ex1, ex2, ex3],
	typeOfThing2: [ex1, ex2, ex3],
	...
}
*/
  
  
var sampleSillyArr = [
	'animals',
	['dogs', 'cats', 'pigs'],
	'sopranos',
	["Tony", "Carmella", "AJ", "Meadow"],
	'guitars',
	['Fender', 'Gibson']
];

function objectifyer (arr){
	var obj = {};
	for(var i=0; i < arr.length; i+=2 ){
		obj[arr[i]] = arr[i+1]
	}
	return obj;	
//	if /*  the thing in sampleSillyArr is a str, make it a key for sampleSillyObj */
//	else if /* its an array, its the other part of the object ... */
		return
}

console.log(objectifyer(sampleSillyArr));

// output should look like :

var sampleSillyObj = {
	'animals':
	['dogs', 'cats', 'pigs'],
	'sopranos':
	["Tony", "Carmella", "AJ", "Meadow"],
	'guitars':
	['Fender', 'Gibson']
};

// console.log(sampleSillyObj)