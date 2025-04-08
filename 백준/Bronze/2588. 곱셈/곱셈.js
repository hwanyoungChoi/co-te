const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N1, N2] = input;

for (let i = N2.length - 1; i >= 0; i--) {
  console.log(Number(N1) * Number(N2.slice(i, i + 1)));
}

console.log(Number(N1) * Number(N2));
