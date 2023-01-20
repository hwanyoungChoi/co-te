function solution(numbers, k) {
    let answer = 0;
    
    for (let i = 1; i <= k; i++) {
        if (i === k) {
            answer = numbers[0];
        }
        
        const splice = numbers.splice(0, 2);
        numbers.splice(numbers.length, 0, ...splice);
    }
    
    return answer;
}