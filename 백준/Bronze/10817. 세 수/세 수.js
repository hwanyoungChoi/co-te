const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

const numbers = input.map(Number);
numbers.sort((a, b) => a - b);

console.log(numbers[1]);
