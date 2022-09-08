/**
 * DP solution: top down approach (overlap result), so memory utilize;  bottom up approach
 * 2 types of problem: 1. only the result, 2. details result, such as which combination works for this
 * Return fewest number of coin
 *
 * @param array coins
 * @param number amount
 * @return number (if no possible value, return -1)
 */
function coinChange (coins, amount) {
    const max = amount + 1;
    const dp = Array(max).fill(max);
    dp[0] = 0;

    for(let i = 1; i < max; i++) {
        for (let j=0; j < coins.length; j++) {
            if (coins[j] <= i) {
                dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
                console.log(`i: ${i} j: ${j} => dp[i]: `, dp[i]);
            }
        }
    }
    console.log('dp: ', dp);
    return dp[amount] > amount ? -1 : dp[amount];
}


console.log('no. of coins 1: ', coinChange([1,2,5], 11)); // 3
console.log('no. of coins 1: ', coinChange([2], 3)); // -1
console.log('no. of coins 1: ', coinChange([1], 0)); // 0
