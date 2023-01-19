function solution(array) {
    let count = 0;
    
    array.forEach((v) => {
        count += v.toString().split('').filter((n) => Number(n) === 7).length;
    });
    
    return count;
}