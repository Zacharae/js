/*
	EAT IT!
	
	Create a function that will 'judge' the results of a competitive eating competition
	
	There are 3 foods:
	
		pizza: 2 points
		hotdog : 3 points
		cheeseburger : 5 points
	
	Your function will take an array of objects. Each object contains the competitor's name, and the number of each food item they've eaten. 
	
	You should return an array of objects, with each object containing the player's name and their total score
	
	eg:
		Input: [
				  {name: "Habanero Harry", pizza: 5 , hamburgers: 17, hotdogs: 11},
				  {name: "Big Bob" , pizza: 20, hamburgers: 4, hotdogs: 11}
				]
				
		Output: [
				  {score: 134, name: "Big Bob"},
				  {score: 98, name: "Habanero Harry"}
				]		
	
*/

function eatIt(arr) {
	var newArr = [];
	for(i=0;i< arr.length;i++){
		var oldObj = arr[i];
		
		var newObj = {
			name: oldObj.name,
			score: oldObj.pizza*2 + oldObj.cheeseburger*5 + oldObj.hotdog*3
		}
		newArr.push(newObj)
	}
	return newArr;
}


var competitors = [
		{name: "Big Bernie" , pizza: 20, cheeseburger: 4, hotdog: 11},
		{name: "Habanero Hillary" , pizza: 2, cheeseburger: 14, hotdog: 3},
		{name: "Doughboy Donald" , pizza: 18, cheeseburger: 2, hotdog: 12},
		{name: "Creepy Cruz" , pizza: 1, cheeseburger: 1, hotdog: 0}
	];
console.log(eatIt(competitors))