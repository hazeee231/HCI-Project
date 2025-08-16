let numbers = [12, 45, 67, 23, 90, 32, 11, 9, 28];
let evenGreaterThan20 = [];
let count = 0;

for (let number of numbers) {
  if (number > 20 && number % 2 === 0) {
    evenGreaterThan20.push(number);
    count++;
  }
}

console.log(`Found ${count} numbers: [${evenGreaterThan20.join(", ")}]`);
