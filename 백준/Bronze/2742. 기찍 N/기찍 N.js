const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const COUNT = Number(input[0]);

for (let i = COUNT; i > 0; i--) {
  console.log(i);
}
