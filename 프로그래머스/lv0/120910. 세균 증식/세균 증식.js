function solution(n, t) {
    let answer = n;
    
    for (let i = t; i > 0; i--) {
        answer *= 2;
    }
    return answer;
}