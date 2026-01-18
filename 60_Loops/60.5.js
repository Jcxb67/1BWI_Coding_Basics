let a = 3;
let b = 6;
let total = 0;
let start = Math.min(a, b);
let end = Math.max(a, b);
for (let i = start; i <= end; i++) {
total += i;
}
console.log("Summe von " + a + " bis " + b + " ist: " + total);