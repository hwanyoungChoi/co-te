function solution(s) {
    var answer = '';
    
    const map = new Map();
    
    s.split('').sort().forEach((v) => {
       if (!map.has(v)) {
           map.set(v, 1);
           return;
       }
        map.set(v, map.get(v) + 1);
    });
    
    map.forEach((value, key) => {
        if (value === 1) {
            answer += key;
        }
    });
    
    return answer;
}