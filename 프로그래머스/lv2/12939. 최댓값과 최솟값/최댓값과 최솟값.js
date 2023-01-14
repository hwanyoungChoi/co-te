function solution(s) {
    let max;
    let min;
    
    s.split(' ').forEach((number, index) => {
        const n = Number(number);
        
        if (!index) {
            max = n;
            min = n;
        }
        
        if (max < n) {
            max = n;
        }
        if (min > n) {
            min = n;
        }
    });
    
    
    var answer = `${min} ${max}`;
    return answer;
}