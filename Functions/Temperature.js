const readline = require('readline-sync');
let str = readline.question("Enter y for degF to degC conversion, n for vice-versa: ");
str = str.toLowerCase();
let temp_str = readline.question("Enter temperature: ");
let temp = parseInt(temp_str);
// Converts farenheits to degree centigrades temperature
function farenheitToDegreeCentigrade(temp) {
	if (temp < 32 || temp > 212) {
		console.log("Invalid input!");
		return;
	}
	console.log("temp is degC is: " + ((temp - 32) * (5 / 9)));
}
// Converts centigrades to farenheits temperature
function centigradeToDegreeFarenheit(temp) {
	if (temp < 0 || temp > 100) {
		console.log("Invalid input!");
		return;
	}
	console.log("temp in degF is: " + ((temp * 9 / 5) + 32));
}
if (str == "y") {
	farenheitToDegreeCentigrade(temp);
} else {
	centigradeToDegreeFarenheit(temp);
}
