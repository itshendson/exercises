/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {    
    let count = 0;
    for (let i = 0; i <= nums.length - 1; i++) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            count++;
            i--;
        }
    }
    for (let j = 0; j <= count - 1; j++) {
        nums.push(0);
    }
};



// Test Case
// [0,1,0,3,12]
// [1,1,1,1,1]
// [0,0,0,0,0]
// [1,2,3,4,0]
// [1,2,3,0,4]
// [0,0,1]


