var twoSum = function(numbers, target) {
    // let hash = {};

    // for (let i = 0; i < numbers.length; i++){
    //     let num = numbers[i];
    //     console.log(num, i)
    //     let comp = target - num;
    //     console.log(comp)
    //     console.log(hash)
    //     if (comp in hash) return [hash[comp] + 1, i + 1]
    //     hash[num] = i;
    // }
    let i = 0;
    let j = numbers.length - 1;

    while (i < j){
        const sum = numbers[i] + numbers[j];
        if (sum === target) return [i + 1, j + 1]
        if (sum > target) {
            j--;
        } else {
            i++;
        }
    }
};

const numbers = [1,2,3,4,6]
// Output: [1,3]
console.log(twoSum(numbers, 6));