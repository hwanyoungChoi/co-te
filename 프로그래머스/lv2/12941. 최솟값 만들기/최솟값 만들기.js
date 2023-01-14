function solution(A,B){
    const sortedA = A.sort((a, b) => a - b);
    const sortedB = B.sort((a, b) => b - a);
    
    let answer = 0;
    
    sortedA.forEach((a, index) => {
        answer += (a * sortedB[index]);
    });

    return answer;
}