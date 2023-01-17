function solution(priorities, location) {
    let answer = 0;
    
    const indexList = Array.from(priorities, (_, i) => i);
    
    while (priorities.length > 0) {
        // 정렬될 떄 까지 여기 로직만 실행
        if (priorities.some((priority) => priority > priorities[0])) {
            priorities.push(priorities.shift());
            indexList.push(indexList.shift());
            continue;
        }
        
        answer += 1;
 
        if (indexList[0] === location) {
            break;
        }
    
        if (indexList[0] !== location) {
            priorities.shift();
            indexList.shift();
        }
    }
    
    return answer;
}
