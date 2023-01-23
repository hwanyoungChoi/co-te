function solution(x) {
    const acc = x
        .toString()
        .split('')
        .map(Number)
        .reduce((acc, cur) => acc + cur, 0);
    
    return x % acc === 0;
}