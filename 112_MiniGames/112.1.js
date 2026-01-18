const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function wuerfeln() {
  readline.question("Drücke Enter zum Würfeln...", () => {
    let spieler = Math.floor(Math.random() * 6) + 1;
    let computer = Math.floor(Math.random() * 6) + 1;

    console.log("Du hast eine " + spieler + " gewürfelt.");
    console.log("Der Computer hat eine " + computer + " gewürfelt.");

    if (spieler > computer) {
      console.log("Ergebnis: Du hast gewonnen! 🎉");
    } else if (spieler < computer) {
      console.log("Ergebnis: Der Computer hat gewonnen! 🤖");
    } else {
      console.log("Ergebnis: Unentschieden! 🤝");
    }

    readline.question("Nochmal würfeln? (j/n): ", (antwort) => {
      if (antwort.toLowerCase() === "j") {
        wuerfeln();
      } else {
        console.log("Danke fürs Spielen!");
        readline.close();
      }
    });
  });
}

wuerfeln();