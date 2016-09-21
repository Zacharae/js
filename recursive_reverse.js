/*
	REVERSE STRING
	
	Create a function that takes a string of any length as input and returns that string reversed. 
	
	Use recursion ;)
*/
// function reverse(string) {
// 	return(string === '') ? '' : reverse(string.substr(1)) + string.charAt(0);
// }
// reverse('I should put this on a blog.')


// function reverse(s) {
//   return s.split('').reverse().join('');
// }


function reverse(str) {
	if (str.length <= 1) return str;
	else return str[str.length-1] +reverse(str.slice(0, -1));
}
reverse('rats live on no evil star')
