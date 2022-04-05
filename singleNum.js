

var singleNumber = function(nums) {
    let hash = {}
    for (let n of nums) {
        if (hash[n]) {
        hash[n] += 1
        } else {
            hash[n] = 1
        }
        
        
    }
    // console.log(hash)
    let res = Object.keys(hash).filter(num => hash[num] === 1)
    console.log(res[0])
    return res[0]
};

console.log(singleNumber([2,2,1]))