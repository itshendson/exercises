/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let left = 0;
    let right = 0;
    let maxOnes = 0;
    
    while (right < nums.length) {                                   // Iterate through array
        if (nums[right] === 0) {                                    // Condition to stop expansion
            maxOnes = Math.max(maxOnes, right - left);              // Process subarray
            left = right + 1;                                       // Contract window (yes, it is contracting even though it "looks" like your just setting left border to be greater than right border)
        }
        right++;                                                    // Expand window
    }

    maxOnes = Math.max(maxOnes, right - left);                      // Handles edge cases where subarray doesn't end in 0
    return maxOnes;                                                 
};

findMaxConsecutiveOnes([0,1])


// Test Cases
// [1,1,0,1,1,1]
// [1,0,1,1,0,1]
// [0,1]
// [1,0]
// [1,0,1,1]
// [1,1,1]
// [0,0,0]