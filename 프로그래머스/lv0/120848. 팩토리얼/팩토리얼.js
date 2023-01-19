function solution(n) {
    let num = 1;
    let count = 1;
    
    while (num <= n) {
        num *= count;
        
        if (num > n) {
            break;
        }
        
        count++;
    }
    
    return count - 1;
}