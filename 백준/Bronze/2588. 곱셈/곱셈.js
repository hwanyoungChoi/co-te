const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const numbers = input;

for (let i = 2; i >= 0; i--) {
  const num1 = Number(numbers[0]);
  const target = Number(numbers[1][i]);

  console.log(num1 * target);
}

console.log(Number(numbers[0]) * Number(numbers[1]));
