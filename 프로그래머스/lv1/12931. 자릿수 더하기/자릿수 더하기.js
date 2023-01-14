function solution(n) {
    const numbers = n.toString().split('');
    
    var answer = 0;
    
    numbers.forEach((number) => answer += Number(number));

    return answer;
}