function getBAC(weight, gender, drinks, drinkType, hours) {
	if (drinkType === "beer") { a = drinks * 8 * .04;
	} if (drinkType === "whiskey") { a = drinks * 4 * .32;
	} if (gender === "M") { r = .73	
	} if (gender === "F") { r = .66
	}
	if ((a * 5.14) / (weight * r) - (.015 * hours) <= 0) { return 0;
	}
	return ((a * 5.14) / (weight * r) - (.015 * hours))
}
console.log(getBAC(125, "F", 4, "whiskey", 1));
console.log(getBAC(160, "M", 22, "beer", 2))
console.log(getBAC(400, "M", 1, "whiskey", 3))
