const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const optionen = ["Schere", "Stein", "Papier"];

function spiel() {
  readline.question("Wähle Schere, Stein oder Papier: ", (wahl) => {
    let computerWahl = optionen[Math.floor(Math.random() * 3)];
    console.log("Computer wählt: " + computerWahl);

    if (wahl === computerWahl) {
      console.log("Unentschieden!");
    } else if (
      (wahl === "Stein" && computerWahl === "Schere") ||
      (wahl === "Schere" && computerWahl === "Papier") ||
      (wahl === "Papier" && computerWahl === "Stein")
    ) {
      console.log("Gewonnen! 💪");
    } else {
      console.log("Verloren! 💀");
    }
    
    readline.close();
  });
}

spiel();