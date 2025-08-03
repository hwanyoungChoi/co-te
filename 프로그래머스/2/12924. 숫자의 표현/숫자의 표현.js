// 절반 이상부터는 더해봤자 n보다 커지므로 계산 안 해도 됨..
// 자기자신은 항상 참이므로 1을 항상 더해줌

function solution(n) {
    if (n <= 2) {
        return 1;
    }
    
    const maxCount = (n / 2 % 2) === 0 ? (n / 2) : (n / 2 + 1);
    
    let answer = 0;
    
    for (let i = 1; i <= maxCount; i++) {
        let sum = 0;
        
        for (let j = i; j <= n; j++) {
            sum += j;
            
            if (sum === n) {
                answer++;
                break;
            }
            
            if (sum > n) {
                break;
            }
        }
    }
    
    return answer + 1;
}