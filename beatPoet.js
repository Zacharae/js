function beatPoet(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

array1 = ['how', 'do', 'I', 'love', 'you', 'let', 'me', 'count', 'the', 'ways', ' ', ' ',' ',' ',' ',' ',' ']

markov = {
	I : ['will', 'come', 'am'],
	come : ['from'],
	from : ['the', 'over', 'where'],
	over : ['the', 'where'],
	the : ['will', 'east', 'moon'],
	moon : ['east', 'come', 'I', 'from', 'over', 'the'],
	east : ['moon', 'I']
}
 console.log(beatPoet(markov))



 function pairs(arr) {
 	var wordPairs = {};

 	for(var i = 0; i<bar.length; i++) {
 		var current = bar[i];
 		var next = bar[i+1];

 		if(wordPairs[current]) {
 	//		if(i === )
 			wordPairs[current].push(next);
 		} else {
 			wordPairs[current] = [next];
 		}
 	} 
 	return wordPairs;
 }