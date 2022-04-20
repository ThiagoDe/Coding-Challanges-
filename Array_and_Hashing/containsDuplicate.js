var containsDuplicate = function(nums) {
    let hash = {};
    for (let n of nums){
        if (n in hash) return true;
        hash[n] = true;
    }
    return false;
};