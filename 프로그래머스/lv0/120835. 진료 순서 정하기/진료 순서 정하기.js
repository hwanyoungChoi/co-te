function solution(emergency) {
    // Deep Copy
    const sortedEmergency = emergency.slice().sort((a, b) => b - a);
    
    return emergency.map((v) => sortedEmergency.indexOf(v) + 1);
}