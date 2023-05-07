function solution(arr1, arr2) {
    let answer = [];
    
    for (let row = 0; row < arr1.length; row++) {
        const newRow = [];
        
        for (let col = 0; col < arr1[row].length; col++) {
            newRow.push(arr1[row][col] + arr2[row][col]);
        }
        
        answer.push(newRow);
    }
    
    return answer;
}