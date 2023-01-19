const VOWELS = ['a', 'e', 'i', 'o', 'u'];

function solution(my_string) {
    return my_string
        .split('')
        .filter((s) => !VOWELS.includes(s))
        .join('');
}