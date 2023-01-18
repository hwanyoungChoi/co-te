function solution(n) {
    const sqrt = Math.trunc(Math.sqrt(n));
    
    if (Math.pow(sqrt, 2) === n) {
        return Math.pow((sqrt + 1), 2);
    }
    
    return -1;
}