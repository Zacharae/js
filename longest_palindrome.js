// an array of strings is examined for the longest palindrome - case-insensitive


function isPalindrome(str) {
	str = str.toUpperCase();
	var reverse = str.split("").reverse().join("");
	return str == reverse;
}


function longestP(arr){
    var longestPalindrome = "";
    for(var i = 0; i < arr.length; i++){
        if(isPalindrome(arr[i]) === true) {
            if(arr[i].length > longestPalindrome.length){
                longestPalindrome = arr[i];
            }
        }
    }
    return longestPalindrome;
}

console.log(longestP(['racecar', 'rats live on nO evil star', "201BoB102", '1234abc', 'amanaplanacanalpanama']))