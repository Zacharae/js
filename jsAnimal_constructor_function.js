//Animal constructor function
function Animal(species, call) {
  this.species = species;
  this.call = call;
  this.speak = function (call) {
  	console.log("The " + this.species + " says " + this.call)
  }
}

//The Animals. Follow the design pattern to make as many as you want and add them to the zoo
var horse = new Animal('horse', 'neigh');
var wolf = new Animal('wolf', 'howl');
var squirrel = new Animal('squirrel', 'chip chip');
var cow = new Animal('cow', 'moo');
var narwhal = new Animal('narwhal', 'blub blub');
var okapi = new Animal('okapi', 'kapi-kapi');
var monster = new Animal('monster', 'hullabaloo');


//Zoo object with nested exhibit objects
var zoo = {
	"exhibits" : {
		"Farm" : {
			"animals" : [cow, horse],
			"open" : true
		},
		"Grasslands" : {
			"animals" : [okapi],
			"open" : false
		},
		"Forest" : {
			"animals" : [wolf, squirrel],
			"open" : true
		},
		"Arctic" : {
			"animals" : [narwhal, monster],
			"open" : false
		}
	}
};

//Complete this function that will take an exhibit string as an input
// The funcion should "visit" the given exhibit (if it is open) and log out each of the animals "speaking". If the exhibit isn't open, the function should log a message telling the visitor to try another one

function visit(exhibit) {
	var theExhibit = zoo.exhibits[exhibit];
	if (theExhibit.open){
		for(var i = 0; i < theExhibit.animals.length; i++){
			theExhibit.animals[i].speak()
		}
	} else {
		console.log("exhibit closed, try another");
	}
	
	// for each (var exhibits in zoo) {
	// 	open = true?[animals = Animal(return.call)]:["nobody home"];
	// }
	
	
}
visit("Forest")