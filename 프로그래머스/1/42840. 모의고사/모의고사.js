const PERSON = {
    1: [1,2,3,4,5],
    2: [2,1,2,3,2,4,2,5],
    3: [3,3,1,1,2,2,4,4,5,5],
};

function solution(answers) {
    const copied = [...answers];
    
    const collectMap = {
        1: 0,
        2: 0,
        3: 0,
    };
    
    for (let i = 0; i < answers.length; i++) {
        const answer = answers[i];
        
        Object.keys(PERSON).forEach((key) => {
            let targetIndex = i;
            
            if (i >= PERSON[key].length) {
                targetIndex %= PERSON[key].length;
            }
            
            if (answer === PERSON[key][targetIndex]) {
                collectMap[key]++;
            }
        });
    }
    
    const values = Object.values(collectMap).map((v) => v);
    const max = Math.max(...values);
    
    const best = [];
    
    for (const key in collectMap) {
        const value = collectMap[key];
        
        if (value === max) {
            best.push(Number(key));
        }
    }
    
    return best;
}