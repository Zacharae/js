function nameGame(name) {
	var vowels = ['a', 'e', 'i','o', 'u', 'A', 'E', 'I', 'O', 'U'];
	var gameName = '';
	for(var i = 0; i < vowels.length; i++){
		if(vowels[i] === name[0]){
			gameName = name.toLowerCase()
			break; // but you don't really have to..
		}
	}
	if(gameName.length === 0){
		gameName = name.substring(1)
	}
	var finalName = name + " " + name + " " + "Bo B" + gameName;
	return finalName;
}
console.log(nameGame('David'))