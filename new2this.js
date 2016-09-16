function Table(name, password, email){
	this.name = name;
	this.password = password;
	this.email = email;
	this.readOut = function() {
		console.log("login as "+ name + " by using "+email+" and " + password)
	}
}
var sampleUser = new Table('user','pwd','name@example.com');
sampleUser.readOut();