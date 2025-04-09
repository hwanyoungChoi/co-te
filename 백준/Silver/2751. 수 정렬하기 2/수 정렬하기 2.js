const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const numbers = input.slice(1).map(Number);

const OFFSET = 1000000;

// 숫자를 배열의 인덱스처럼 생각하고 저장하자..
const countArray = Array(OFFSET * 2 + 1).fill(false);

for (const number of numbers) {
  countArray[number + OFFSET] = true;
}

const sortedArray = [];

for (const [index, count] of countArray.entries()) {
  if (count) {
    sortedArray.push(index - OFFSET);
  }
}

console.log(sortedArray.join("\n"));
