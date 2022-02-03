/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let left = 0, right = 1;
    let maxProfit = Number.MIN_VALUE;
    
    while (right < prices.length) {
        if (prices[left] < prices[right]) {
            maxProfit = Math.max(maxProfit, prices[right] - prices[left]);
        } else {
            left = right;
        }
        right++;
    }
    return maxProfit;
}

maxProfit([7,1,5,3,6,4]);

// How do I know what the condition for stopping expansion should be.
// - My last method didn't work because left++ couldn't be reached.
// Need to know why contract window

// Test cases
// [5,0,15]
// [7,1,5,3,6,4]
// [0]
// [0,1]
// [2,1]
// [1,0]
// [3,1,2]
// [3,1,2,4,5,6,7]
// [3,2,1]
// [2,4,1]
// [3,2,6,5,0,3]



/*  
*   This is the method I created originally which was wrong.
*
*/
var maxProfitWrongMethod = function(prices) {
    let left = 0, right = 0;
    let maxProfit = Number.MIN_VALUE;
    let currentProfit = 0;
    
    while (right < prices.length) {
        if (right > left) currentProfit = prices[right] - prices[left];
        
        while (currentProfit > maxProfit) {                                         // This condition may never be met. For instance: [7,1,5,3,6,4]
            maxProfit = currentProfit;
            left++;                                                                 // This line is never reached because the condition to stop expanding might never be met.
        }
        
        right++;
    }
    return maxProfit;
}