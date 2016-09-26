function staircase(n) {
	
	var numSpaces;
	var numPounds
	for (i = 0; i < n; i++){
		numSpaces = n-1-i;
		numPounds = n - numSpaces;
		var spacesString = '';
		var poundString = '';
		for (var z=0; z<numSpaces; z++) {
			spacesString += ' '
		}
		for (var y=0; y<numPounds; y++) {
			poundString += "#";
		}
		console.log(spacesString+poundString)
	}
	
}
staircase(10);



// submit application by thurs
// complete thing by sunday
// interview mon or tues
// only allowed two tries
// flex immersive, part-time