function solution(s) {
    const codes = s.split('').map((_, i) => s.charCodeAt(i));
    
    codes.sort((a, b) => b - a);
    
    return codes.map((c) => String.fromCharCode(c)).join('');
}