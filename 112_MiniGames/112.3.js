const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let geheimzahl = Math.floor(Math.random() * 100) + 1;

function raten() {
  readline.question("Rate die Zahl zwischen 1 und 100: ", (input) => {
    let tipp = Number(input);

    if (tipp === geheimzahl) {
      console.log("Genau richtig! Du hast die Zahl gefunden! 🏆");
      readline.close();
    } else if (tipp > geheimzahl) {
      console.log("Zu hoch! Versuch es nochmal.");
      raten();
    } else {
      console.log("Zu niedrig! Versuch es nochmal.");
      raten();
    }
  });
}

console.log("Ich habe mir eine Zahl ausgedacht...");
raten();