function upDown(n) {
	var s = '';
	for (var i = 0; i < n; i++)
		s+= i;
		s += ' ';
	}
	for (var i = n; i >= 0; i--) {
		s +=i;
		if(i !== 0) s+= ' '
	}
	return s;
}
console.log(upDown(6))