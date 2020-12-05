// Checks if the number is prime or not
const readline = require('readline-sync');
let value = readline.questionInt("Enter a number: ");
let isPrime = true;
for (let i = 2; i <= Math.sqrt(value); i++) {
	if (value % i == 0) {
		isPrime = false;
		break;
	}
}
if (value == 1) {
	console.log("It is a composite number")
}
else if (isPrime) {
	console.log(value + " is a prime number!");
} else {
	console.log(value + " is not a prime number!");
}
