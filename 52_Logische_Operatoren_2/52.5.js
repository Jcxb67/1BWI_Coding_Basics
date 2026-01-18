let heartRate = 110;
let age = 35;
if (age < 30 && heartRate < 100) {
console.log("Light exercise");
} else if (age >= 30 && (heartRate >= 80 && heartRate <= 120)) {
console.log("Moderate exercise");
} else {
console.log("Consult a doctor before exercising");
}