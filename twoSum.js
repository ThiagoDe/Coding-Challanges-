var twoSum = function(nums, target) {
    let solution = {}
    
    nums.forEach((n, idx) => {
       let possible = target - n
       if(solution[possible]){ return [solution[possible], idx]}
       solution[n] = idx
    })

    console.log(solution)
};

console.log(twoSum([2,7,11,15], 9))