function solution(s){
    const lowerCharacters = s.toLowerCase().split('');
    
    let pCount = 0;
    let yCount = 0;
    
    lowerCharacters.forEach((char) => {
       if (char === 'p') {
           pCount++;
           return;
       }
        
        if (char === 'y') {
            yCount++;
        }
    });

    return pCount === yCount;
}