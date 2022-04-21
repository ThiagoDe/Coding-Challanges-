var maxProfit = function(prices) {
    let max = 0;
    let buy = 0;
    let sell = 1;

    while (sell < prices.length){
        if (prices[buy] > prices[sell]) {
            buy = sell;
            sell++;
            continue;
        } else {
            let profit = prices[sell] - prices[buy]  ;
            max = Math.max(max, profit);
            sell++
            continue;
        }
    }
    return max;
};
// const prices = [7,1,5,3,6,4]
const prices = [2,1,2,1,0,1,2]
console.log(maxProfit(prices))
// Output: 5
