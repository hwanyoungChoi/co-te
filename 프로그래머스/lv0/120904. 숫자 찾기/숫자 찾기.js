function solution(num, k) {
    const index = num
        .toString()
        .split('')
        .map(Number)
        .indexOf(k);
    
    if (index === -1) {
        return index;
    }
    
    return index + 1;
}