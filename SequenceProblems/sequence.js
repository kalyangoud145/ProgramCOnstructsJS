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
console.log("Sum of five random 2-digit numbers is: " + sum);
console.log("Avg of five random 2-digit numbers is: " + (sum / 5) + "\n");

// 5. Unit conversions
const ONE_INCH_IN_FEET = 1 / 12;
console.log("42 inches in : " + ONE_INCH_IN_FEET * 42 + " feets\n");

let area_Of_One_Plot = (60 * 40 * 100 / 328);
console.log("Area of 60feet X 40feet in meters is: " + area_Of_One_Plot);

let area_Of_25_Plots = (area_Of_One_Plot * 247 * 25 / 1000000);
console.log("Area of 25 such plots: " + 25 * area_Of_25_Plots);