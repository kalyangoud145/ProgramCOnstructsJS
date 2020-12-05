// Play the game untill the bet reaches to zero or 200
let bet = 100;
let win = 0;
let loose = 0;
while (bet > 0 && bet < 200) {
	let luck = Math.floor(Math.random() * 1000) % 2;
	if (luck == 0) {
		loose++;
		bet--;
	} else {
		win++;
		bet++;
	}
}
console.log("final money: " + bet);
console.log("total wins: " + win);
console.log("total loose: " + loose);
