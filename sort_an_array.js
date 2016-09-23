//sorts an array of numbers

function reorder(arr) {
	return arr.sort(function(a, b) {
	if(a < b) return -1;
	if(b < a) return 1;
	else return 0;
	})
	for(i=0; i<arr.length; i++){	
	}
}
console.log(reorder([1,8,7,4,6,5,3,2,9]))