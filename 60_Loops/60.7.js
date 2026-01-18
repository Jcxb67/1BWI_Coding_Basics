let sum5 = 0;
for (let i = 1; i <= 100; i++) {
if (i % 5 === 0) {
sum5 += i;
}
}
console.log("Summe der durch 5 teilbaren Zahlen: " + sum5);