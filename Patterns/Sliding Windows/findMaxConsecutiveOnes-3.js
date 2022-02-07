/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var longestOnes = function(nums, k) {
    let left = 0;
    let right = 0;
    let numOfZeroes = 0;
    let longestConsecutive = 0;
    
    while (right < nums.length) {
        
        if (nums[right] === 0) numOfZeroes++;
        
        if (numOfZeroes <= k) {
            longestConsecutive = Math.max(longestConsecutive, right - left + 1);
        } else {
            numOfZeroes = 0;
            left++;
            right = left - 1;
        }
        right++;
    }
    return longestConsecutive;
};


longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3);

// Test Cases:
// [1,1,1,0,0,0,1,1,1,1,0]
// 2
// [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1]
// 3
// [1]
// 1
// [0]
// 1
// [1,1]
// 2
// [1,0]
// 2
// [0,1]
// 2