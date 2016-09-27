//
 
function snowflake() {
	var returnArr = [];
	var flatArr = [];
	var arrays = arguments;
	for (var array = 0; array < arrays.length; array++) {
		var thisArray = arrays[array];
		for (var index = 0; index < thisArray.length; index++) {
			flatArr.push(thisArray[index]);
		}
	}
	for (var i = 0; i < flatArr.length; i++) {
		if (flatArr.indexOf(flatArr[i]) === flatArr.lastIndexOf(flatArr[i])) returnArr.push(flatArr[i]);
	}
	return returnArr;
}
 
// function snowflake() {
//     var returnArr = [];
//     var arrays = arguments;
//     for (var array = 0; array < arrays.length; array++) {
//         var thisArray = arrays[array];
//         for (var index = 0; index < thisArray.length; index++) {
//             var uniqueElement = true;
//             if (thisArray.indexOf(thisArray[index]) !== thisArray.lastIndexOf(thisArray[index])) uniqueElement = false;
//             var arrayToCheck = 0;
//             while (uniqueElement && arrayToCheck < arrays.length) {
//                 if (arrayToCheck !== array && arrays[arrayToCheck].indexOf(thisArray[index]) > -1) {
//                     uniqueElement = false;
//                 }
//                 arrayToCheck++;
//             }
//             if (uniqueElement) {
//                 returnArr.push(thisArray[index]);
//             }
//         }
//     }
//     return returnArr;
// }
 
 
 console.log(snowflake(['dog','cat','mouse'], [3, 'dog'], ['cat', 2, 1]))

