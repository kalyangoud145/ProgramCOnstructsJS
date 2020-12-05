// Gives nth harmonic number
const readline = require('readline-sync');
let num = readline.questionInt("Enter a number: ");
let harmonicNumber = 0;
for (let i = 1; i <= num; i++) {
	harmonicNumber += (1 / i);
}
console.log(harmonicNumber);
