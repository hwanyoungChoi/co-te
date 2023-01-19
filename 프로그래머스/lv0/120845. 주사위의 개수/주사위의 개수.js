function solution(box, n) {
    // 0번 / 3 * 1번 / 3 * 2번 / 3
    
    return box
        .map((v) => Math.trunc(v / n))
        .reduce((acc, cur) => acc * cur, 1);
}