let numbers = [4, 1, 2, 3];
numbers.push(17);
numbers.push(199);
console.log("Alle Werte:");
for (let i = 0; i < numbers.length; i++) {
console.log(numbers[i]);
}
let summe = 0;
for (let i = 0; i < numbers.length; i++) {
summe = summe + numbers[i];
}
console.log("Summe: " + summe);
let mittelwert = summe / numbers.length;
console.log("Mittelwert: " + mittelwert);