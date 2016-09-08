function nickName(name) {
	var thirdLetter = name.charAt(2);
	var vowels = 'aeiou';
	if(vowels.indexOf(thirdLetter) > -1) {
		return name.substr(0,4)
	} else {
		return name.substr(0,3)
	}
}

// nickName("daniel");
nickName("beowulf");