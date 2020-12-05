const readline = require('readline-sync');
let year = readline.questionInt("Enter year: ");
if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
	console.log("Leap Year!");
} else {
	console.log("Not a Leap Year!")
}