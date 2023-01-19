function solution(array, n) {
    const arr = array.map((v) => Math.abs(n - v));
    
    const min = Math.min(...arr);
    
    const minIndexList = [];
    
    arr.forEach((v, index) => {
        if (v === min) {
            minIndexList.push(index);
        }
    });
    
    const v = minIndexList.map((i) => array[i]);
    
    return Math.min(...v);
}