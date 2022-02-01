/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMaxConsecutiveOnes = function(nums) {
    let left = 0;
    let right = 0;
    let countOfZeroes = 0;
    let maxConsecutiveOnes = 0;
    
    while (right < nums.length) {
        
        if (nums[right] === 0) countOfZeroes++
        
        while (countOfZeroes === 2) {
            maxConsecutiveOnes = Math.max(maxConsecutiveOnes, right - left);
            if (nums[left] === 0) countOfZeroes--;
            left++;
        }
        
        right++;
    }

    if (countOfZeroes < 2) maxConsecutiveOnes = Math.max(maxConsecutiveOnes, right - left) 
    
    return maxConsecutiveOnes;
};

findMaxConsecutiveOnes([0,1,0]);