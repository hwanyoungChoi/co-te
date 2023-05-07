function solution(a, b) {
    var answer = 0;
    
    a.forEach((num, index) => {
        answer += num * b[index];
    });
    
    return answer;
}