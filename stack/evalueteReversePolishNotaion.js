// NOT FINISH

// Input: tokens = ["2","1","+","3","*"]
// Output: 9
// Explanation: ((2 + 1) * 3) = 9
// Example 2:

// const tokens = ["4","13","5","/","+"]
const tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
// Output: 6
// Explanation: (4 + (13 / 5)) = 6

const evalRPN = (tokens) => {
    let stack = [];

    for (let token of tokens) {
        if (token === '/'){
            let n2 = stack.pop();
            let n1 = stack.pop();
            stack.push(Math.floor(n1 / n2))
            // console.log(val)
        } else if (token === '*'){
            let n2 = stack.pop();
            let n1 = stack.pop();
            stack.push(Math.floor(n1 * n2))
        } else if (token === '+') {
            let n2 = stack.pop();
            let n1 = stack.pop();           
            stack.push(n1 + n2);
        } else if (token === '-') {
            let n2 = stack.pop();
            let n1 = stack.pop();
            stack.push(n1 - n2)
        } else {
            stack.push(Number(token))
        }
    }
    return stack[0];
};

console.log(evalRPN(tokens))