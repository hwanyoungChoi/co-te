function solution(sizes) {
    let wMax = 0;
    let hMax = 0;
    
    sizes.forEach((size) => {
        const [w, h] = size[0] > size[1] ? [size[0], size[1]] : [size[1], size[0]];
        
        if (w > wMax) {
            wMax = w;
        }
        if (h > hMax) {
            hMax = h;
        }
    });
    
    return wMax * hMax;
}