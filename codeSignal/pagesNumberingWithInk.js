const current = 21
const numberOfDigits = 5
// solution(current, numberOfDigits) = 22

function solution(current, numberOfDigits) {
    let currentNum = current //21
    let digAvailable = numberOfDigits // 5
    let print = []

    while (digAvailable > 0) {
        let dig = String(currentNum).length
        if (dig <= digAvailable) {
            print.push(currentNum)
            digAvailable -= dig 
            currentNum = currentNum + 1
            
        } else {
            break
        }
    }

    return print.pop()
}



console.log(solution(current, numberOfDigits));