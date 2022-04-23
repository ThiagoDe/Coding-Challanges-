//Not working

var climbStairs = function(n, store = {}) {
    if (n === 0) return 1;
    if (n < 0) return 0;
    if (n in store) return store[n];
    store[n - 2] = climbStairs(n - 2, store);
    store[n - 1] = climbStairs(n - 1, store);
    
    store[n] = store[n - 2] + store[n - 1]
    // console.log(store)
    return store[n];
    
};

console.log(climbStairs(3))