function solution(s) {
    if (s.length !== 4 && s.length !== 6) {
        return false;
    }
    
    let answer = true;
    
    for (let i = 0; i < s.length; i++) {
        if (Number.isNaN(Number(s[i]))) {
            answer = false;
            break;
        }
    }
    
    // FailCase: '3e10'은 숫자로 변환됨
    // if (Number.isNaN(Number(s))) {
    //     return false;
    // }
    return answer;
}