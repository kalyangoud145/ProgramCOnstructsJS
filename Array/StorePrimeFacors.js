// Gives prime factors of a number
const readline = require('readline-sync');
let number = readline.questionInt("Enter a number: ");
let array = new Array();
//if (number / 2) array.push(2);
for (let i = 2; i <= Math.sqrt(number); i++) {
    while (number % i == 0) {
        array.push(i);
        number /= i;
    }
}
// Removes the duplicates in array
function removeDuplicates(data) {
    return data.filter((value, index) => data.indexOf(value) == index);
}
let finalArray = removeDuplicates(array);
for (let temp of finalArray) {
    if (temp !== 1) {
        console.log(temp);
    }
}
