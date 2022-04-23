var KthLargest = function(k, nums) {
    this.nums = nums;
    this.k = k;
};

KthLargest.prototype.add = function(val) {
    this.push(val);
    return this.nums.sort((a, b) => a - 1)[this.k - 1]
};
