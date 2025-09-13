function solution(n, m) {
    var answer = [calcGCD(n, m), calcLCM(n, m)];
    return answer;
}

function calcGCD(n, m) {
    const max = Math.max(n, m);
    let gcd = 0;
    
    for (let i = 1; i < max; i++) {
        if (n % i === 0 && m % i === 0) {
            gcd = i;
        }
    }
    
    return gcd;
}

function calcLCM(n, m) {
    return (n * m) / calcGCD(n, m);
}