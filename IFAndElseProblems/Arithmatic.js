const readline = require('readline-sync');
let a = readline.questionInt("Enter first number: ");
let b = readline.questionInt("Enter second number:");
let c = readline.questionInt("Enter third number:");
let first = a + (b * c);
let second = (a % b) + c;
let third = c + (a / b);
let fourth = (a * b) + c;
// Prints the arithmatic operation with minimum value
if ((first < second || first <= second) && (first < third || first <= third) && (first < fourth || first <= fourth)) {
    console.log("Min value is: a + b * c");
} else if ((second < first || second <= first) && (second < third || second <= third) && (second < fourth || second <= fourth)) {
    console.log("Min value is:(a % b) + c ");
} else if ((third < first || third <= first) && (third < second || third <= second) && (third < fourth || third <= fourth)) {
    console.log("Min value is: c + (a / b) ");
} else if ((fourth < first || fourth <= first) && (fourth < second || fourth <= second) && (fourth < third || fourth <= third)) {
    console.log("Min value is: (a * b) + c");
}
// Prints the arithmatic operation with maximum value
if ((first > second || first >= second) && (first > third || first >= third) && (first > fourth || first >= fourth)) {
    console.log("Max value is: a + b * c");
} else if ((second > first || second >= first) && (second > third || second >= third) && (second > fourth || second >= fourth)) {
    console.log("Max value is:(a % b) + c ");
} else if ((third > first || third >= first) && (third > second || third >= second) && (third > fourth || third >= fourth)) {
    console.log("Max value is: c + (a / b) ");
} else if ((fourth > first || fourth >= first) && (fourth > second || fourth >= second) && (fourth > third || fourth >= third)) {
    console.log("Max value is: (a * b) + c");
}