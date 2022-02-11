/**
 Do not return anything, modify nums in-place instead.
 */
 function moveZeroes(nums) {
    let j = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            let temp = nums[j];
            nums[j] = nums[i];
            nums[i] = temp;
            j++;
        }
    }
};