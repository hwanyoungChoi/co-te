function solution(my_string) {
    return my_string
        .split('')
        .map(Number)
        .filter((s) => !isNaN(s))
        .sort((a, b) => a - b);
}