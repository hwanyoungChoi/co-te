const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const input = fs.readFileSync(filePath).toString().trim();

const N = Number(input);

for (let i = 1; i <= N; i++) {
  console.log(i);
}
