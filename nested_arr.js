// var whatWeWant = [
// 	[1,2,3,4,5,6,7,8,9,10],
// 	[1,2,3,4,5,6,7,8,9,10],
// 	[1,2,3,4,5,6,7,8,9,10],
// 	[1,2,3,4,5,6,7,8,9,10],
// 	[1,2,3,4,5,6,7,8,9,10],
// 	[1,2,3,4,5,6,7,8,9,10],
// 	[1,2,3,4,5,6,7,8,9,10],
// 	[1,2,3,4,5,6,7,8,9,10],
// 	[1,2,3,4,5,6,7,8,9,10],
// 	[1,2,3,4,5,6,7,8,9,10]
// ];


function makeGrid(dimension) {
	var outerArr = [];
	for(var i = 0; i < dimension; i++) {
		var innerArr = [];
		outerArr.push(innerArr);
		for(var j = 0; j < dimension; j++){
			outerArr[i][j] = j+1
		}
	}
	return outerArr
}


console.log( makeGrid(10) );

