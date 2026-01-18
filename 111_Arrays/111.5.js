let numbers = [5, 88, 12, 199, 3, 42];
let largest = numbers[0];
for (let i = 1; i < numbers.length; i++) {
if (numbers[i] > largest) {
largest = numbers[i];
}
}
console.log("Die größte Zahl in der Liste ist: " + largest);