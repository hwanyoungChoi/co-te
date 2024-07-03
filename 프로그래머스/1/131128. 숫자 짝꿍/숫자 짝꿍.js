const MAX = 10;

function solution(X, Y) {
    const xCount = Array(MAX).fill(0);
    const yCount = Array(MAX).fill(0);

    for (let i = 0; i < X.length; i++) {
        xCount[X[i]] += 1;
    }

    for (let i = 0; i < Y.length; i++) {
        yCount[Y[i]] += 1;
    }

    const result = [];

    for (let i = 0; i < MAX; i++) {
        const commonCount = Math.min(xCount[i], yCount[i]);

        for (let j = 0; j < commonCount; j++) {
            result.push(i);
        }
    }

    if (!result.length) {
        return '-1';
    }

    const sortedMatchArr = result.sort((a, b) => b - a);

    if (sortedMatchArr[0] === 0) {
        return '0';
    }

    return sortedMatchArr.join('');
}