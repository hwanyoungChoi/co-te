const PIECE = 6;

function solution(n) {
    let count = 1;
    
    while ((PIECE * count % n) !== 0) {
        count++;
    }
    
    return count;
}