var twoSum = function(nums, target) {
    let prev = {}
   for (let i = 0; i < nums.length; i++){
       let possible = target - nums[i];
       if (possible in prev) return [prev[possible], i ]
       prev[nums[i]] = i;
   }
}