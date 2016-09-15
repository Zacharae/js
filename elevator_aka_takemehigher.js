
var currentFloor = 0;
function goingDown(floor){
	console.log("DING! " + currentFloor + " going down.");
	currentFloor--;
	elevator(floor)
}
var currentFloor = 0;
function goingUp(floor){
	console.log("DING! " + currentFloor + " going up.");
	currentFloor++;
	elevator(floor)
}
function arrived() {
	console.log("Doors have opened on floor " + currentFloor + ".")
}
function elevator(floor) {
	if(floor>currentFloor){
		goingUp(floor);
	} else if (floor<currentFloor){
		goingDown(floor);
	} else{
		arrived()
	}
}


elevator(1);
elevator(11);
elevator(15);
elevator(6);
elevator(1);