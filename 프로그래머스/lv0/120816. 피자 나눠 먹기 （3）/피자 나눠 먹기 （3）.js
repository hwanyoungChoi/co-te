function solution(slice, n) {
    let answer = 0;
    
    while (n > 0) {
        n -= slice;
        answer += 1;
    }
    
    return answer;
}