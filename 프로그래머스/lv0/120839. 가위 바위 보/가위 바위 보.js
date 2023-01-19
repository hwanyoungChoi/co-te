function getWinnerValue(value) {
    if (value === 2) {
        return 0;
    }
    if (value === 0) {
        return 5;
    }
    return 2;
}

function solution(rsp) {
    return rsp.split('').map((v) => getWinnerValue(Number(v))).join('');
}