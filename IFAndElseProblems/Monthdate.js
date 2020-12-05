const readline = require('readline-sync');
let day = readline.questionInt("Enter date of the month: ");
let month = readline.questionInt("Enter month from 1 to 12: ");
// Prints true if date is between the march 20 and june 20 
// else prints false
if (month < 1 || month > 12 || day < 1 || day > 31) {
    console.log("Invalid Input!");
} else if (month == 3 && day >= 20) {
    console.log("True");
} else if (month == 4 && day <= 30) {
    console.log("True");
} else if (month == 5 && day <= 31) {
    console.log("True");
} else if (month == 6 && day <= 20) {
    console.log("True");
} else {
    console.log("False");
}
