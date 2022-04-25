
var longestConsecutive = function(nums) {
    let total = 0;
    let sorted = [...new Set(nums.sort((a, b) => a - b))]
    console.log(sorted)
    let currentMax = 0
    
    for (let i = 1; i <= nums.length; i++){
       
        if ((sorted[i] - sorted[i - 1]) === 1){
            currentMax += 1;
        } else {
            if (total < currentMax) total = currentMax;
            currentMax = 0;
        }
    }
    return total + 1;
};

const nums = [0,3,7,2,5,8,4,6,0,1]

console.log(longestConsecutive(nums));
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.