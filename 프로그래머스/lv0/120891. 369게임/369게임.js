const rules = [3, 6, 9];

function solution(order) {
    let count = 0;
    Array.from(String(order))
        .forEach((v) => {
            if (rules.some((r) => r === Number(v))) {
                count++;
            }
        })
    
    return count;
}