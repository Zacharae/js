
function removeZero(qq) {
	if (qq === 0) return 30;
	qq = qq.toString();
	var s = "";
	
	for (var i = 0; i < qq.length; i++) {
		if(qq[i] !== '0') {
			s+= qq[i];
		}		
	}
	return Number(s);
}
console.log(removeZero(0));
