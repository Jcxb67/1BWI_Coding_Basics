const readline = require('readline').createInterface({
input: process.stdin, output: process.stdout
});
readline.question("Welches Getränk willst du? (Cola, Wasser, Tee): ", (drink) => {
if (drink === "Cola" || drink === "Wasser" || drink === "Tee") {
console.log("Danke für deine Bestellung von " + drink + ".");
} else {
console.log("Dieses Getränk haben wir leider nicht.");
}
readline.close();
});