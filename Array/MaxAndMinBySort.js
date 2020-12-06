let randomNumberArray = new Array();
/// Store the 3 digit random numbers to array
for (let i = 0; i < 10; i++) {
    let number = Math.floor(Math.random() * 900 + 100);
    randomNumberArray.push(number);
    console.log(number);
}
let sortedNumberArray = randomNumberArray.sort();
console.log("The second largest number is:" + sortedNumberArray[8] + "" +
    " The second smallest number is:" + sortedNumberArray[1])