const COMPLETE = 100;

function solution(progresses, speeds) {
    var answer = [];
    
    while (progresses.length > 0) {
        speeds.forEach((speed, index) => {
            if (progresses[index] < COMPLETE) {
                progresses[index] += speed;
            }
        });
        
        if (progresses[0] >= COMPLETE) {
            let completeCount = 0;
        
            while (progresses[0] >= COMPLETE) {
                progresses.shift();
                speeds.shift();
                completeCount += 1;
            }

            answer.push(completeCount);   
        }
    }
    
    
    return answer;
}