// insecure password hash

'use strict';

const passwords = [
	'Password123',
	'DavidYangsMiddleName',
	'qwert',
	'S3cur3P455WORD',
	'OpenSesame',
	'DeadChildhoodPetsName'
];

function gate(password, passwordsArray) {
	
	for(var i = 0; i < passwords.length; i++) {
		if(passwordsArray.indexOf(password) !== -1) {
			console.log("You're In!");	
		} else {
			console.log("try again.");
		}
	return;
	}
}

gate('Password123', passwords);

