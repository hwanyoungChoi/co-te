function solution(phone_number) {
    const lastNumbers = phone_number.slice(-4);
    return lastNumbers.padStart(phone_number.length, '*');
}