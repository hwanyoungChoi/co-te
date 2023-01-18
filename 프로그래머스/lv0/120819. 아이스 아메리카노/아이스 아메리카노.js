const PRICE = 5500;

function solution(money) {
    return [Math.trunc(money / PRICE), money % PRICE];
}