// Gives table of powers of two whose value less than 256
const readline = require('readline-sync');
let num = readline.questionInt("Enter a number: ");
let x = 0;
let i = 1;
while (power < 256) {
	power = 2 ** i;
	console.log("2 ^" + i + "= " + power);
	i++;
}
