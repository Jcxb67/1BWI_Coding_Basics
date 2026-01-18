const readline = require('readline').createInterface({
input: process.stdin, output: process.stdout
});
readline.question("Wie viel Grad hat es draußen? ", (answer) => {
let temp = Number(answer);
if (temp < 5) { console.log("Drinnen bleiben"); }
else if (temp < 15) { console.log("Warm anziehen"); }
else if (temp < 25) { console.log("Raus gehen"); }
else { console.log("Baden gehen"); }
readline.close();
});