const minChange = (amount, coins) => {
    const answer = _minChange(amount, coins);
    if (answer === Infinity) {
        return - 1;
    } else {
        return answer;
    }
}

const _minChange = (amount, coins, memo = {}) => {
    if (amount in memo) return memo[amount];
    if (amount < 0) return Infinity;
    if (amount === 0 ) return 0;

    let minCoins = Infinity;
    for (let coin of coins) {
       const numCoins = 1 + _minChange(amount - coin, coins, memo)
       minCoins = Math.min(numCoins, minCoins);
    }

    memo[amount] = minCoins;
    return minCoins;
};
console.log(minChange(13, [1, 9, 5, 14, 30])); // -> 5