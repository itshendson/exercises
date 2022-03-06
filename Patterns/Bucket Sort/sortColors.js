/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * Bucket Sort Method
 */
 var sortColors = function(nums) {
    let countOfZero = 0;
    let countOfOne = 0;
    let countOfTwo = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) countOfZero++;
        if (nums[i] === 1) countOfOne++;
        if (nums[i] === 2) countOfTwo++;
    }
    
    for (let i = 0; i < nums.length; i++) {
        if (countOfZero) {
            nums[i] = 0;
            countOfZero--;
        } else if (countOfOne) {
            nums[i] = 1;
            countOfOne--;
        } else if (countOfTwo) {
            nums[i] = 2;
            countOfTwo--;
        }
    }
    
    return nums;
};

sortColors([2,0,2,1,1,0])
