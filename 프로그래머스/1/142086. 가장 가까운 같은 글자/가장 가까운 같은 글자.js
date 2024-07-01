function solution(s) {
  const answer = [];
  const histories = [];

  s.split("").forEach((char, index) => {
    let value = -1;

    if (histories.lastIndexOf(char) !== -1) {
      value = index - histories.lastIndexOf(char);
    }

    answer.push(value);
    histories.push(char);
  });

  return answer;
}