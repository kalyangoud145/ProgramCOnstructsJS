let randomNumberArray = new Array();
/// Store the 3 digit random numbers to array
for (let i = 0; i < 10; i++) {
    let number = Math.floor(Math.random() * 900 + 100);
    randomNumberArray.push(number);
    console.log(number);
}
let first = randomNumberArray[0];
let second = randomNumberArray[1];
// Sets the seconde largest number to second variable
for (let i = 1; i < 10; i++) {
    if (first < randomNumberArray[i]) {
        second = first;
        first = randomNumberArray[i];
    }
    else {
        if (randomNumberArray[i] > second && randomNumberArray[i] != first) {
            second = randomNumberArray[i];
        }
    }
}
if (second == first) {
    console.log("There is nor second largest number");
}
else {
    console.log("second largest number is: " + second);
}
// Sets the seconde smallest number to second variable
for (let i = 1; i < 10; i++) {
    if (first > randomNumberArray[i]) {
        second = first;
        first = randomNumberArray[i];
    }
    else {
        if (randomNumberArray[i] < second && randomNumberArray[i] != first) {
            second = randomNumberArray[i];
        }
    }
}
if (second == first) {
    console.log("There is nor second smallest number");
}
else {
    console.log("second smallest number is: " + second);
}