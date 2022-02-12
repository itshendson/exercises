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

moveZeroes([6, 0, 1, 3, 0])

// Test Case
// [6, 0, 1, 3, 0]
// [0,1,0,3,12]
// [1,1,1,1,1]
// [0,0,0,0,0]
// [1,2,3,4,0]
// [1,2,3,0,4]
// [0,0,1]