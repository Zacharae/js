// prime check - - - checks for prime numbers ..
function primeCheck(num) {
	for (var n = 2; n < num; n++){
		if (num % n === 0) {
			return false;
		} else {
			return true;
		}
	}
	return num >= 1;
}
primeCheck(101);
