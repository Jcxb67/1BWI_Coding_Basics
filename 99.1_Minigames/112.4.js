const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// 3 Bomben an zufälligen Positionen (0 bis 24 für ein 5x5 Feld)
let bomben = [];
while (bomben.length < 3) {
  let pos = Math.floor(Math.random() * 25);
  if (!bomben.includes(pos)) bomben.push(pos);
}

function feldAnzeigen() {
  readline.question("Gib eine Zahl von 0 bis 24 ein (Koordinate): ", (input) => {
    let wahl = Number(input);

    if (bomben.includes(wahl)) {
      console.log("BOOM! 💥 Du bist auf eine Bombe getreten. Spiel vorbei.");
      readline.close();
    } else {
      console.log("Puh! Keine Bombe hier. Sicher.");
      // Erweiterung: Einfache Anzeige
      console.log("(Tipp: Die Bomben sind heute nicht bei " + wahl + ")");
      feldAnzeigen();
    }
  });
}

console.log("--- Mini Minesweeper (5x5 Feld) ---");
feldAnzeigen();
