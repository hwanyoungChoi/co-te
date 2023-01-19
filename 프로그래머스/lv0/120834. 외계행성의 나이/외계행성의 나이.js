function solution(age) {
    // 97 = a
    return age
        .toString()
        .split('')
        .map((v) => String.fromCharCode(97 + Number(v)))
        .join('');
}