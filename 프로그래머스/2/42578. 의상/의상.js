function solution(clothes) {
    const clothesMap = new Map();
    
    clothes.forEach((c) => {
        const [name, type] = c;
        
        if (!clothesMap.has(type)) {
            clothesMap.set(type, []);
        }
        
        clothesMap.set(type, [...clothesMap.get(type), name]);
    });
    
    let numberOfCases = 1;
    
    Array.from(clothesMap.values()).forEach((values) => {
        // 안 입는 경우도 포함해야해서 1 더함
        const cases = values.length + 1;
        numberOfCases *= cases;
    });
    
    // 모두 안 입는 경우는 없으므로 1 뺌
    return numberOfCases - 1;
}