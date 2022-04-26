const threeSum = (nums) => {
    let results = [];
    let sorted = nums.sort((a, b) => a - b); // [ -4, -1, -1, 0, 1, 2 ]

    for (let i = 0; i < nums.length; i++){
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        const target = 0 - nums[i];
        let left = i + 1;
        let right = nums.length - 1;

        while (right > left) {
            let sum = nums[left] + nums[right];
            if (sum > target){
                right -= 1;
            } else if (sum < target){
                left += 1;
            } else {
                results.push([ nums[i], nums[left], nums[right]])
                while (nums[left] === nums[left + 1]) left++;
                while (nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            }
        }
    }
    return results;
}
const nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

console.log(threeSum(nums));