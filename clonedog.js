//clonedog
var ourDog = {name: 'Sam', age:7, friend: {name: 'spot', age:12}};
var ourDogClone = {};
for (var key in ourDog) {
	ourDogClone[key] = ourDog[key];
}
ourDogClone.age = 0;
ourDogClone.friend.name = 'Jon';
ourDogClone.friend.age = 0;

console.log(ourDog);
console.log(ourDogClone);