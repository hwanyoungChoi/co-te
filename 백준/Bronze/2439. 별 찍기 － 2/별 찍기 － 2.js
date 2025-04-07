const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const count = Number(input[0]);

for (let i = 1; i <= count; i++) {
  const space = " ".repeat(count - i);
  const star = "*".repeat(i);

  console.log(space + star);
}
