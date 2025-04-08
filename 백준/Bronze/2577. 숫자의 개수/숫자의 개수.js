const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const numbers = input.map(Number);

const result = numbers[0] * numbers[1] * numbers[2];

const numberCountArray = Array(10).fill(0);

for (let n of result.toString().split("")) {
  numberCountArray[n] += 1;
}

for (let count of numberCountArray) {
  console.log(count);
}
