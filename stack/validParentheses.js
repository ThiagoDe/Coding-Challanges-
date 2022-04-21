var isValid = function(s) {
    const stack = [];
    const map = {
        ')' : '(',
        ']' : '[',
        '}' : '{'
    }

    for (let c of s) {
        if (c in map){
            if (stack[stack.length - 1] === map[c]) {
                stack.pop();
            } else {
                return false;
            }
        } else {
            stack.push(c);
        }
    }
    if (stack.length === 0) return true;
};
const s = "()[]{}";
// Output: true
console.log(isValid(s));