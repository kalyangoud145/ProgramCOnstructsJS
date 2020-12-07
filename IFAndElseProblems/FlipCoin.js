const HEAD = 0;
const TAIL = 1;
let coinFlip = Math.floor(Math.random() * 10) % 2;
if (coinFlip == HEAD) {
    console.log("Heads");
} else {
    console.log("Tails");
}