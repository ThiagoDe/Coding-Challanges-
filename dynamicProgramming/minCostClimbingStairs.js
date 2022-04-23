var minCostClimbingStairs = function(cost) {
    let first = cost[0];
    let second = cost[1];

    for (let i = 2; i < cost.length; i++){
        let current = cost[i] + Math.min(first, second);
        first = second;
        second = current;
    }
    return Math.min(first, second);
};

const cost = [1,100,1,1,1,100,1,1,100,1]
// Output: 6
console.log(minCostClimbingStairs(cost));