let numbers = [];
for (let i = 0; i < 7; i++) {
numbers.push(Math.floor(Math.random() * 100));
}
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
sum = sum + numbers[i];
}
console.log("Die Zahlen sind: " + numbers);
console.log("Die Summe ist: " + sum);