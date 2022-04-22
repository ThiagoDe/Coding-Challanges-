var search = function(nums, target) {
    const mid = Math.floor(nums.length / 2);
    if (nums.length < 1) return - 1;
    if (nums[mid] === target) return mid;
    console.log(nums[mid])
    if (nums[mid] > target) {
        return search(nums.slice(0, mid), target);
    } else {
        console.log(nums.slice(mid + 1))
        let memo = search(nums.slice(mid + 1), target);
        // console.log(memo)
        if (memo === - 1) return - 1;
        return memo + mid + 1;
    }
};

const nums = [-1,0,3,5,9,12]
// Output: 4
// Explanation: 9 exists in nums and its index is 4
console.log(search(nums, 9))