const readline = require('readline').createInterface({
input: process.stdin,
output: process.stdout
});
let password = "Schnitzel";
readline.question("Bitte gib das Passwort ein: ", (input) => {
if (input === password) {
console.log("Zugriff gewährt");
} else {
console.log("Zugriff verweigert");
}
readline.close();
});