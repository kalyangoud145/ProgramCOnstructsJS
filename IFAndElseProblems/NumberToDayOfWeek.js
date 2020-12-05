const readline = require('readline-sync');
let day = readline.questionInt("Enter week-day in number between [1,7]: ");
// Takes number as input and print respective day of the week
if (day == 1) {
    console.log("Number entered is Sunday ");
} else if (day == 2) {
    console.log("Number entered is Monday ");
} else if (day == 3) {
    console.log("Number entered is Tuesday ");
} else if (day == 4) {
    console.log("Number entered is Wednesday ");
} else if (day == 5) {
    console.log("Number entered is Thursday ");
} else if (day == 6) {
    console.log("Number entered is Friday ");
} else if (day == 7) {
    console.log("Number entered is Saturday ");
} else {
    console.log("Incorrect Input!");
}