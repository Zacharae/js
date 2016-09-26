// sequences genes, for format see str1 down below

function sequence(DNA) {
	var dictionary = {
		A: 'T',
		G: 'C',
		C: 'G',
		T: 'A',
	};
	var pairArr = []
	for (var i=0; i < DNA.length; i++) {
		if ( DNA[i] !== '-') {
			var pair = dictionary[DNA[i]]
			pairArr.push(pair);
		}	
	};
	var pairStr = '--' + pairArr.join('--') + '--' ;
	console.log(DNA);
	console.log(pairStr)
}

var str1 = '--A--G--C--T--G--A--';
sequence(str1);
