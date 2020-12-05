// flips the coin until heads or tails reaches 11
let Head = 0, Tail = 0;
while (Head < 11 && Tail < 11) {
	let coin = Math.floor(Math.random() * 1000) % 2;
	if (coin == 1) {
		Head++;
	} else {
		Tail++;
	}
}
console.log("Heads count: " + Head + " " + "Tails count: " + Tail);
