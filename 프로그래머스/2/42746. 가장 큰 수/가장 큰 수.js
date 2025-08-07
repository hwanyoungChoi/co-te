function solution(numbers) {
    const s = numbers.map(String).sort((a, b) => (b + a) - (a + b)).join('');
    
    if (s[0] === "0") {
        return "0";
    }
    
    return s;
}