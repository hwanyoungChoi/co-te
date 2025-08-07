function solution(array, commands) {
    const answers = [];
    
    for (const [i, j, k] of commands) {
        const spliced = array.slice(i - 1, j).sort((a, b) => a - b);
        answers.push(spliced[k - 1]);
    }
    
    return answers;
}