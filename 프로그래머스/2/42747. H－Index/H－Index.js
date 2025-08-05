function solution(citations) {
    citations.sort((a, b) => b - a);
    
    const n = citations.length;
    
    let h = 0;
    
    for (const citation of citations) {
        console.log(h, n, citation);
        if (h <= n && h <= citation) {
            if (h + 1 <= citation) {
                h++;
            }
            
        }
    }
    
    return h;
}