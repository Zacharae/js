/*
	NAME GAMES
	
	Create two functions, sayMyName() and playNameGame()
	
	sayMyName() will take 2 arguments: a first name and a last name. It will log out the string "My name is FIRSTNAME LASTNAME"
	
	sayMyName("Dan", "The Man") ==> "My name is Dan The Man"
	
	playNameGame() will take a person's first name. It will log out a string of the name game song
	
	playNameGame("Daniel") ==> "Daniel Daniel Bo Baniel Banana Fana Fo Faniel Fee Fi Mo Maniel Daniel"
	
	playNameGame("Ariel") ==> "Ariel Ariel Bo Bariel Banana Fana Fo Fariel Fee Fi Mo Mariel Ariel"
	
*/

// Name Game 

function sayMyName(dan, man) {
console.log("My name is " + dan + " " + man );	
}

function playNameGame(donny) {
	var firstLetter = name.charAt(0);
	var vowels = 'AEIOU';
	if(vowels.indexOf(firstLetter) > -1) {
var onny = donny.slice(1);	
	} else {
var onny = donny;
	}
 console.log( donny + " " + donny + " Bo B" + onny + " Banana Nana Fo F" + onny + " Fee Fi Fo " + donny + " Mi My Mo M" + onny + " - " + donny + "!" );
}

sayMyName ("Jeff", "Lebowski");
playNameGame("Walter");

// tried to edit for names that beging with vowels, but no dice. 
//													...if you want dice check out the craps sim.