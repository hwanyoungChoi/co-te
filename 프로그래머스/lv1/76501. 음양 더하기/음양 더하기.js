function solution(absolutes, signs) {
    signs.forEach((v, index) => {
       if (!v) {
           absolutes[index] *= -1;
       }
    });
    
    return absolutes.reduce((acc, cur) => acc + cur, 0);
}