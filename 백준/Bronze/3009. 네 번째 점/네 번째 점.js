const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const positions = input.map((v) => v.split(" "));

const result = {
  x: [],
  y: [],
};

for (let i = 0; i < 3; i++) {
  const [x, y] = positions[i];

  const xIndex = result.x.findIndex((n) => n === x);
  if (xIndex !== -1) {
    result.x.splice(xIndex, 1);
  } else {
    result.x.push(x);
  }

  const yIndex = result.y.findIndex((n) => n === y);
  if (yIndex !== -1) {
    result.y.splice(yIndex, 1);
  } else {
    result.y.push(y);
  }
}

console.log(`${result.x[0]} ${result.y[0]}`);
