// Gives prime factors of a number
const readline = require('readline-sync');
let number = readline.questionInt("Enter a number: ");
for (let i = 2; i <= number/2; i++) {
	while (number % i == 0) {
		console.log(i);
		number /= i;
	}
}
if (number != 1) {
	console.log(number);
}