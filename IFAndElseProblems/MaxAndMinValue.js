//1. 5 random 3 digit values, print min and max
let x = Math.floor(Math.random() * 900 + 100);
let y = Math.floor(Math.random() * 900 + 100);
let z = Math.floor(Math.random() * 900 + 100);
console.log("first number is: " + x + "\nsecond number is: " + y + "\nthird number is: " + z);
if ((x < y || x <= y) && (x < z || x <= z)) {
    console.log("Min value is: " + x);
} else if ((y < x || y <= x) && (y < z || y <= z)) {
    console.log("Min value is: " + y);
} else if ((z < x || z <= x) && (z < y || z <= y)) {
    console.log("Min value is: " + z);
}
if ((x > y || x >= y) && (x > z || x >= z)) {
    console.log("Max value is: " + x);
} else if ((y > x || y >= x) && (y > z || y >= z)) {
    console.log("Max value is: " + y);
} else if ((z > x || z >= x) && (z > y || z >= y)) {
    console.log("Max value is: " + z);
}