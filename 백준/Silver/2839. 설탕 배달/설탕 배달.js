const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const input = fs.readFileSync(filePath).toString().trim();

let N = Number(input);
let count = 0;

while (N >= 0) {
  if (N % 5 === 0) {
    count += N / 5;
    console.log(count);
    return;
  }
  N -= 3;
  count++;
}

console.log(-1);
