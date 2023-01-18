function solution(num_list) {
    const count = [0, 0];
    
    num_list.forEach((v) => {
       if (v % 2 === 0)  {
           count[0] += 1;
       } else {
           count[1] += 1;
       }
    });
    
    return count;
}