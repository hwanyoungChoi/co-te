function solution(numbers) {
    numbers.sort((a, b) => a - b);
    
    const num1 = numbers[0] * numbers[1];
    const num2 = numbers.at(-1) * numbers.at(-2);
    
    return Math.max(num1, num2);
}