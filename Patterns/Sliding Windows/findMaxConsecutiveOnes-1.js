/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMaxConsecutiveOnes = function(nums) {
    let left = 0;
    let right = 0;
    let maxConsecutiveOnes = 0;
    
    while (right < nums.length) {
        if (nums[right] === 0) {
            maxConsecutiveOnes = Math.max(maxConsecutiveOnes, right - left - 1);
            left++;
        }
        right++;
    }
    maxConsecutiveOnes = Math.max(maxConsecutiveOnes, right - left - 1);
    return maxConsecutiveOnes;
};

findMaxConsecutiveOnes([1,0,1,1,1,1,0])


// Test Cases
// [1,0,1,1,1,1,0]
// [1,0,1,1,0,1]
// [0,1]
// [1,0]
// [1,0,1,1]