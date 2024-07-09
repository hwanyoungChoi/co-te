function solution(participant, completion) {
  let result = "";
  const map = new Map();

  participant.forEach((p) => {
    if (!map.get(p)) {
      map.set(p, 1);
    } else {
      map.set(p, map.get(p) + 1);
    }
  });

  completion.forEach((c) => {
    map.set(c, map.get(c) - 1);
  });

  for (const [key, value] of map) {
    if (value > 0) {
      result = key;
    }
  }

  return result;
}
