var twoSum = function(nums, target) {
    let obj = {} //'2': 0, '7': 1
   
   for (let idx = 0; idx < nums.length; idx++)  {
                       // 9 - 7
       let possible = target - nums[idx] // 2
       if(String(possible) in obj) return [obj[possible], idx] // [0, 1]
       obj[nums[idx]] = idx
    }

    // console.log(obj)
};

// var twoSum = function(nums, target) {
//     const obj = {};
    
//     for (let i = 0; i < nums.length; i++) {
//         const num = nums[i];
//         if (num in obj) return [ obj[num], i ];
//         else obj[target - num] = i;
//     }
// };

console.log(twoSum([2,7,11,15], 9))