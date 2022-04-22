const findPeakElement = (nums) => { // 1 , 2 
    if (nums.length <= 1) return 0;
    let mid = Math.floor(nums.length / 2)

    let current = nums[mid];
    let prev = nums[mid - 1] === undefined ? - Infinity : nums[mid - 1];
    let next = nums[mid + 1] === undefined ? - Infinity : nums[mid + 1];
    if (current > prev && current > next) return mid;

    if ( current > prev && current < next) { // check right side
        let memo = findPeakElement(nums.slice(mid + 1))
        //if (memo === 0) return memo + mid;
        return memo + mid + 1 ;
    } else {
        return findPeakElement(nums.slice(0, mid));
    }

}
const nums = [1,2,1,3,5,6,4];
// const nums = [1, 2];
// Output: 5
console.log(findPeakElement(nums));