const readline = require('readline').createInterface({
input: process.stdin, output: process.stdout
});
readline.question("Wie alt bist du? ", (answer) => {
let age = Number(answer);
if (age < 18) { console.log("Du bist jung"); }
else if (age < 60) { console.log("Du bist mittelalt"); }
else { console.log("Du bist alt"); }
readline.close();
});