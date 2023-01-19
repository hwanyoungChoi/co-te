function solution(hp) {
    let count = 0;
    
    while (hp) {
        count++;
        
        if (hp >= 5) {
            hp -= 5;
            continue;
        }
        if (hp >= 3) {
            hp -= 3;
            continue;
        }
        hp -= 1;
    }
    
    return count;
}