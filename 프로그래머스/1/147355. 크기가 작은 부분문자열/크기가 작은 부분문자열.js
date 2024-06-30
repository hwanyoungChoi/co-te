function solution(t, p) {
    let count = 0;
    const pLength = p.split('').length;
    
    t.split('').forEach((_, index) => {
        const targetNumber = t.slice(index, index + pLength);
        
        if (targetNumber.length !== pLength) {
            return;
        }
        
        if (Number(targetNumber) <= Number(p)) {
            count += 1;
        }
    });
    
    return count;
}