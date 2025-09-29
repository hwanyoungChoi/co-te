const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, ...list] = input;
const answers = [];

for (const str of list) {
  const leftStack = [];
  const rightStack = [];

  for (const c of [...str]) {
    if (c === "(") {
      leftStack.push(c);
    } else {
      rightStack.push(c);

      if (!!leftStack.length) {
        leftStack.pop();
        rightStack.pop();
      }
    }
  }

  if (!!leftStack.length || !!rightStack.length) {
    answers.push("NO");
  } else {
    answers.push("YES");
  }
}

answers.forEach((answer) => console.log(answer));
