const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

const [H, M] = input.map(Number);

const ALARM_MINUTE = 45;

const time = {
  hour: H,
  minute: M,
};

// 10 10
if (M < ALARM_MINUTE) {
  time.minute = M - ALARM_MINUTE;
  if (time.minute < 0) {
    time.minute += 60;
  }

  time.hour -= 1;
  if (time.hour < 0) {
    time.hour = 23;
  }
} else {
  time.minute -= ALARM_MINUTE;
}

console.log(`${time.hour} ${time.minute}`);
