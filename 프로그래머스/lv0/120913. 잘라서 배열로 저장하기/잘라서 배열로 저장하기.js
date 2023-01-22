function solution(my_str, n) {
    const answer = [];
    let pointer = 0;
    
    while (pointer <= my_str.length - 1) {
        const slice = my_str.substring(pointer, n + pointer);
        answer.push(slice);
        pointer += n;
    }
    
    return answer;
}