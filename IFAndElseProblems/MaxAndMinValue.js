//1. 5 random 3 digit values, print min and max
let x = Math.floor(Math.random() * 900 + 100);
let y = Math.floor(Math.random() * 900 + 100);
let z = Math.floor(Math.random() * 900 + 100);
let a = Math.floor(Math.random() * 900 + 100);
let b = Math.floor(Math.random() * 900 + 100);
console.log("first number is: " + x + "\nsecond number is: " + y +
    "\nthird number is: " + z + "\nfourth number is: " + a + "\nfifth number is:" + b);
if ((x < y || x <= y) && (x < z || x <= z) && (x < a || x <= a) && (x < b || x <= b)) {
    console.log("Min value is: " + x);
} else if ((y < x || y <= x) && (y < z || y <= z) && (y < a || y <= a) && (y < b || y <= b)) {
    console.log("Min value is: " + y);
} else if ((z < x || z <= x) && (z < y || z <= y) && (z < a || z <= a) && (z < b || z <= b)) {
    console.log("Min value is: " + z);
} else if ((a < x || a <= x) && (a < y || a <= y) && (a < b || a <= b) && (a < z || a <= z)) {
    console.log("Min value is: " + a);
} else if ((b < x || b <= x) && (b < y || b <= y) && (b < a || b <= a) && (b < z || b <= z)) {
    console.log("Min value is: " + b);
}
if ((x > y || x >= y) && (x > z || x >= z) && (x > a || x >= a) && (x > b || x >= b)) {
    console.log("Max value is: " + x);
} else if ((y > x || y >= x) && (y > z || y >= z) && (y > a || y >= a) && (y > b || y >= b)) {
    console.log("Max value is: " + y);
} else if ((z > x || z >= x) && (z > y || z >= y) && (z > a || z >= a) && (z > b || z >= b)) {
    console.log("Max value is: " + z);
} else if ((a > x || a >= x) && (a > y || a >= y) && (a > b || a >= b) && (a > z || a >= z)) {
    console.log("Max value is: " + a);
} else if ((b > x || b >= x) && (b > y || b >= y) && (b > a || b >= a) && (b > z || b >= z)) {
    console.log("Max value is: " + b);
}