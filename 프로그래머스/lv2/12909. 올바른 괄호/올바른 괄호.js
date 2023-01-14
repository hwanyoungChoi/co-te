function solution(s) {
    if (s[0] === ')') {
        return false;
    }
    if (s[s.length - 1] === '(') {
        return false;
    }
    if (s.length & 2 !== 0) {
        return false;
    }
    if (s.split('(').length - 1 !== s.split(')').length - 1) {
        return false;
    }
    
    const stack = [];
    let answer = true;
    
    for (const character of s.split('')) {
        if (character === '(') {
            stack.push(character);
            continue;
        }
        
        if (character === ')') {
            if (stack.pop() !== '(') {
                answer = false;
                break;
            }
        }
    }
    
    return answer;
}