const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test.txt";
const input = fs.readFileSync(filePath).toString().trim();

const S = input;
const SArray = S.split("");

const aCode = "a".charCodeAt();
const zCode = "z".charCodeAt();

const alphabetLength = zCode - aCode + 1;

const alphabetArray = Array(alphabetLength).fill(-1);

for (let i = aCode; i <= zCode; i++) {
  alphabetArray[i - aCode] = SArray.findIndex(
    (s) => s === String.fromCharCode(i)
  );
}

console.log(alphabetArray.join(" "));
