/**
 * @param {number[]} nums
 * @return {number}
 * Should do this again at a later date.
 */
/*
var removeDuplicates = function(nums) {
    let left = 1;
    let right = 1;
    while (right < nums.length) {
        if (nums[right] != nums[right-1]) {
            nums[left] = nums[right];
            left++;
        }
        right++;
    }
    return left;
};