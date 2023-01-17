function solution(arr) {
    let answer = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    
    return answer / arr.length;
}