const readline = require('readline').createInterface({
input: process.stdin, output: process.stdout
});
readline.question("Gib eine Zahl ein: ", (answer) => {
let number = Number(answer);
if (number > 0) { console.log("The number is positive"); }
else if (number < 0) { console.log("The number is negative"); }
else { console.log("The number is zero"); }
readline.close();
});