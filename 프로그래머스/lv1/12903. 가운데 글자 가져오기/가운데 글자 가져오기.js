function solution(s) {
    const isOdd = s.length % 2 !== 0;
    
    if (isOdd) {
        return s.substring(s.length / 2, s.length / 2 + 1);
    }
    
    return s.substring(s.length / 2 - 1, s.length / 2 + 1);
}