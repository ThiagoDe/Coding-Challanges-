var maxSubArray = function(nums) {
    let max = nums[0];
    let currMax = 0;

    for (let i = 0; i < nums.length; i++){
        if (currMax < 0) currMax = 0;
        currMax += nums[i];
        max = Math.max(currMax, max)
    }
    return max;
};

const nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
console.log(maxSubArray(nums));