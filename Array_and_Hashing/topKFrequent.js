var topKFrequent = function(nums, k) {
    const hash = {};
    
    for (let n of nums){
        if (!hash[n]) hash[n] = 0;
        hash[n] += 1;
    }
    const subs = Object.entries(hash);
    const sorted = subs.sort((a, b) => b[1] - a[1]);
    const result = [];
    for (let i = 0; i < k; i ++){
        result.push(sorted[i][0]);
    }
    return result;
}

const nums = [1,1,1,2,2,3];
console.log(topKFrequent(nums, 2));
// Output: [1,2]