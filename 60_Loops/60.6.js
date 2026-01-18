let numbers = [10, 20, 30, 40]; // Deine Zahlen
let totalSum = 0;
for (let i = 0; i < numbers.length; i++) {
totalSum += numbers[i];
}
let average = totalSum / numbers.length;
console.log("Der Durchschnitt ist: " + average);