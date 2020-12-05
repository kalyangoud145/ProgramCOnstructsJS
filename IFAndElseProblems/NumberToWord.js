const readline = require('readline-sync');
let num = readline.questionInt("Enter a single digit number: ");
if (num < 0 || num > 9) {
    console.log("Incorrect Input!");
} else if (num == 0) {
    console.log("Number entered is zero ");
} else if (num == 1) {
    console.log("Number entered is One ");
} else if (num == 2) {
    console.log("Number entered is Two ");
} else if (num == 3) {
    console.log("Number entered is Three ");
} else if (num == 4) {
    console.log("Number entered is Four ");
} else if (num == 5) {
    console.log("Number entered is Five ");
} else if (num == 6) {
    console.log("Number entered is six ");
} else if (num == 7) {
    console.log("Number entered is seven ");
} else if (num == 8) {
    console.log("Number entered is eight ");
} else if (num == 9) {
    console.log("Number entered is nine ");
} else {
    console.log("input out of defined range");
}