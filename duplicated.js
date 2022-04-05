let nums = [1,2,3,4]

var containsDuplicate = function(nums) {
    let hash = {}
    for (let num of nums) {
        if (hash[num]) return true
        hash[num] = true
        // console.log(hash[num])

    } 
    return false
};

console.log(containsDuplicate(nums))