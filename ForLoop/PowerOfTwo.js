// Gives power of two less than or equal to 2^n
const readline = require('readline-sync');
let number = readline.questionInt("Enter a number: ");
for (let i = 0; i <= number; i++) {
	console.log("2 ^ " + i + " = " + 2 ** i);
}
