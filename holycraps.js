var bettingPool = 0;

function roll() {
	//We use Math.random() to generate a random number between 0 and 1. Using Math.floor() and some arithmetic lets us simulate rolling a 6-sided die
	var d1 = Math.floor(Math.random() * 6) + 1;
	var d2 = Math.floor(Math.random() * 6) + 1;
	
	console.log("I rolled a " + d1 + " and a " + d2);
	
	while( d1 + d2 != 7 && d1 + d2 != 11) {
		console.log("Roll Again!")
		bettingPool += 1;
		d1 = Math.floor(Math.random() * 6) + 1;
		d2 = Math.floor(Math.random() * 6) + 1;
		console.log("I rolled a " + d1 + " and a " + d2);
		if ( d1 + d2 == 2 || d1 + d2 == 3 || d1 + d2 == 12) {
			bettingPool = 0;
			console.log("Oh Crap, Betting Pool is $" + bettingPool)
		}
		console.log("betting pool is $" + bettingPool)
	}

	console.log("Woohoo! I won $" + bettingPool);
}

roll()