function solution(n, k) {
    const total = (12000 * n) + (2000 * k);
    let service = 0;
    
    if (n >= 10) {
        service = Math.trunc(n / 10) * 2000
    }
    return total - service;
}