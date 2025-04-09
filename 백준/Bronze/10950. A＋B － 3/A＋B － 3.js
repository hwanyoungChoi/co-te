const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = Number(input[0]);
const cases = input.slice(1);

for (let i = 0; i < T; i++) {
  const [A, B] = cases[i].split(" ").map(Number);
  console.log(A + B);
}
