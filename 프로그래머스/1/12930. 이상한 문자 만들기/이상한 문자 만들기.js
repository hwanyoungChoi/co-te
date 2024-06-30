function solution(s) {
    const words = s.split(' ');
    
    const convertedWords = words.map((word) => {
        const chars = word.split('');
        
        const convertedChars = chars.map((char, index) => {
            if (index % 2 === 0) {
                return char.toUpperCase();
            }
            return char.toLowerCase();
        });
        
        return convertedChars.join('');
    });
    
    return convertedWords.join(' ');
}