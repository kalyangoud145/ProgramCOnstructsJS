// 1. Random function to get single digit
let randomNumber = Math.floor(Math.random() * 10);
console.log("Single Digit Random Number: " + randomNumber + "\n");
// 2. Generate dice number between 1 to 6
let diceRoll = Math.floor(Math.random() * 6 + 1);
console.log("Dice Number: " + diceRoll + "\n");
// 3. Sum of two dice numbers
let twoDiceSum = Math.floor(Math.random() * 6 + 1) + Math.floor(Math.random() * 6 + 1);
console.log("Sum of two dice numbers: " + twoDiceSum + "\n");
// 4. Generate 5 random 2-digit numbers and find their sum and average value;
let sum = 0;
for (let i = 0; i < 5; i++) {
	let x = Math.floor(Math.random() * 90 + 10);
	console.log("number " + (i + 1) + " is: " + x);
	sum += x;
}