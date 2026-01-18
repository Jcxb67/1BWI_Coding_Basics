const readline = require('readline').createInterface({
input: process.stdin, output: process.stdout
});
readline.question("Gib die Rechnung ein (z.B. 10 + 5): ", (input) => {
let teile = input.split(" ");
let a = Number(teile[0]);
let op = teile[1];
let b = Number(teile[2]);
if (op === "+") { console.log("Ergebnis: " + (a + b)); }
else if (op === "-") { console.log("Ergebnis: " + (a - b)); }
else if (op === "*") { console.log("Ergebnis: " + (a * b)); }
else if (op === "/") { console.log("Ergebnis: " + (a / b)); }
readline.close();
});