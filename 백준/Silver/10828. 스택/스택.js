const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

class Stack {
  constructor() {
    this.stack = [];
    // 코테용
    this.output = [];
  }

  push(item) {
    this.stack.push(item);
  }
  pop() {
    const item = this.stack.pop();

    if (!item) {
      this.output.push(-1);
      return;
    }
    this.output.push(item);
  }
  size() {
    this.output.push(this.stack.length);
  }
  empty() {
    if (!this.stack.length) {
      this.output.push(1);
      return;
    }
    this.output.push(0);
  }
  top() {
    const item = this.stack[this.stack.length - 1];

    if (!item) {
      this.output.push(-1);
      return;
    }
    this.output.push(item);
  }
  print() {
    this.output.forEach((o) => console.log(o));
  }
}

const [N, ...cmds] = input;

const stack = new Stack();

for (const cmd of cmds) {
  const [c, item] = cmd.split(" ");

  if (c === "push") {
    stack.push(Number(item));
  } else if (c === "pop") {
    stack.pop();
  } else if (c === "size") {
    stack.size();
  } else if (c === "empty") {
    stack.empty();
  } else if (c === "top") {
    stack.top();
  }
}

stack.print();
