function solution(x, y, n) {
    if (x === y) return 0;
    if (x > y) return -1;
    
    // dp[i] = i값에 도달하기 위한 최소 연산 횟수
    const dp = new Array(y + 1).fill(Infinity);
    dp[x] = 0;
    
    // x부터 시작해서 y까지 순차적으로 계산
    for (let i = x; i <= y; i++) {
        if (dp[i] === Infinity) continue;
        
        // 각 연산 결과가 y 이하인 경우에만 처리
        if (i + n <= y) {
            dp[i + n] = Math.min(dp[i + n], dp[i] + 1);
        }
        if (i * 2 <= y) {
            dp[i * 2] = Math.min(dp[i * 2], dp[i] + 1);
        }
        if (i * 3 <= y) {
            dp[i * 3] = Math.min(dp[i * 3], dp[i] + 1);
        }
    }
    
    return dp[y] === Infinity ? -1 : dp[y];
}