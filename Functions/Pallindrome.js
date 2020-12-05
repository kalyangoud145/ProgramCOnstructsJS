const readline = require('readline-sync');
let num = readline.questionInt("Enter a number: ");
// Checks if the number is palindrome or not
function PalindromCheck(num) {
	let number = num;
	let isPalindrom = true;
	let rem, temp, final = 0;
	temp = num;
	while (number > 0) {
		rem = number % 10;
		number = parseInt(number / 10);
		final = final * 10 + rem;
	}
	if (final != temp) {
		isPalindrom = false;
	}
	return isPalindrom;
}
if (PalindromCheck(num)) {
	console.log("the Number is palindrome ")
} else {
	console.log("the Number is not palindrome ")
}

