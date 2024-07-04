function solution(ingredient) {
    const stack = [];
    let count = 0;

    ingredient.forEach((item) => {
        stack.push(item);

        if (stack.length >= 4) {
            const length = stack.length;
            if (stack[length - 4] === 1 && stack[length - 3] === 2 && stack[length - 2] === 3 && stack[length - 1] === 1) {
                stack.splice(length - 4, 4);
                count++;
            }
        }
    });

    return count;
}