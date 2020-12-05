const readline = require('readline-sync');
let num = readline.questionInt("Enter a number: ");
let count = 1;
// Prints units, tenths, hundrers ... places of number
while (num > 0) {
    digit = num % 10;
    num = Math.floor(num / 10);
    if (count == 1) {
        console.log(digit + " units");
        count++;
    } else if (count == 2) {
        console.log(digit + " tens");
        count++;
    } else if (count == 3) {
        console.log(digit + " hundres");
        count++;
    } else if (count == 4) {
        console.log(digit + " thousands");
        count++;
    } else if (count == 5) {
        console.log(digit + " ten thousands");
        count++;
    } else if (count == 6) {
        console.log(digit + " lakhs");
        count++;
    } else if (count == 7) {
        console.log(digit + " ten lakhs");
        count++;
    } else if (count == 8) {
        console.log(digit + " crores");
        count++;
    } else if (count == 1) {
        console.log(digit + " ten crores");
        count++;
    }
}