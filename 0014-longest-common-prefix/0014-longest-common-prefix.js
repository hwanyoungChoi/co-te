/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let answer = "";

    for (let i = 0; i < strs[0].length; i++) {
        const c = strs[0][i];

        for (const str of strs) {
            if (str[i] !== c) {
                return answer;
            }
        }

        answer += c;
    }

    return answer;
};