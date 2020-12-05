const readline = require('readline-sync');
let num = readline.questionInt("Enter a number in the form of (1,10,100,1000 etc): ");
let stringLenghth = num.toString().length;
// Prints units, tens, hundred ... of a number
switch (stringLenghth) {
	case 1:
		console.log("Units: " + num % 10);
		break;
	case 2:
		console.log("Units: " + num % 10);
		console.log("Tens: " + Math.floor(((num / 10) % 10)));
		break;
	case 3:
		console.log("Unit: " + num % 10);
		console.log("Tens: " + Math.floor((num / 10) % 10));
		console.log("Hundereds: " + Math.floor((num / 100) % 10));
		break;
	case 4:
		console.log("Units: " + num % 10);
		console.log("Tens: " + Math.floor((num / 10) % 10));
		console.log("Hundereds: " + Math.floor((num / 100) % 10));
		console.log("Thousands: " + Math.floor((num / 1000) % 10));
		break;
	default:
		console.log(" input not in range");
		break;
}
