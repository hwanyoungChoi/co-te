function solution(i, j, k) {
    let count = 0;
    
    for (let n = i; n <= j; n++) {
        n.toString().split('').forEach((v) => {
            if (Number(v) === k) {
                count++;
            }
        });
    }
    
    return count;
}