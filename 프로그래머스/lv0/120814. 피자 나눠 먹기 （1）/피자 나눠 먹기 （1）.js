const PIECE = 7;

function solution(n) {
    let pizzaCount = 0;
    
    while (n > 0) {
        n -= PIECE;
        pizzaCount++;
    }
    
    return pizzaCount;
}