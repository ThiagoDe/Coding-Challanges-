
var productExceptSelf = function(nums) {
    result = [];//[1, 1, 2, 6]
    let prefix = 1;
    for (let i = 0; i < nums.length; i++){
        result[i] = prefix;
        prefix *= nums[i];
    }
    let postFix = 1; // 1, 4, 12, 24
    for (let i = nums.length -1; i >= 0; i--){
        result[i] *= postFix; //6, 8, 12, 24
        postFix *= nums[i] // 4, 12, 24
    }
    return result;
};

const nums = [1,2,3,4]
// Output: [24,12,8,6]
console.log(productExceptSelf(nums));