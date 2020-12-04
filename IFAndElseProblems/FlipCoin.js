const HEAD = 0;
const TAIL = 1;
let coinFlip = Math.floor(Math.random() * 1000) % 2;
if (coinFlip == HEAD) {
    console.log("Heads");
} else {
    console.log("Tails");
}