function solution(s1, s2) {
    const originLength = s1.length + s2.length;
    
    const filteredLength = new Set(s1.concat(s2)).size;
    
    return originLength - filteredLength;
}