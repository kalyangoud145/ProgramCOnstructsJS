const readline = require('readline-sync');
let num = readline.questionInt("Enter a single digit number: ");
// Takes number and displays respective number in words
switch (num) {
    case 0:
        console.log("Number entered is zero ");
        break;
    case 1:
        console.log("Number entered is one ");
        break;
    case 2:
        console.log("Number entered is  two");
        break;
    case 3:
        console.log("Number entered is three ");
        break;
    case 4:
        console.log("Number entered is four ");
        break;
    case 5:
        console.log("Number entered is five");
        break;
    case 6:
        console.log("Number entered is six");
        break;
    case 7:
        console.log("Number entered is seven ");
        break;
    case 8:
        console.log("Number entered is eight ");
        break;
    case 9:
        console.log("Number entered is nine  ");
        break;
    default:
        console.log("Number out of range or invalid input");
        break;
}
