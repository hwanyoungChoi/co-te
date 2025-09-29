const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, ...strs] = input;

let noGroupCount = 0;

for (const str of strs) {
  const checkedChars = [];

  for (let i = 0; i < str.length; i++) {
    const c = str[i];
    const nextC = str[i + 1];

    if (c !== nextC) {
      if (checkedChars.includes(c)) {
        noGroupCount++;
        break;
      }
      checkedChars.push(c);
    }
  }
}

console.log(N - noGroupCount);
