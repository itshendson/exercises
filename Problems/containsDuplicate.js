// function containsDuplicate(nums: number[]): boolean {
//     nums.sort();
    
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === nums[i + 1]) return true;
//     }
    
//     return false;
// };



/*
*   Most efficient function
*/
function containsDuplicate(nums) {
    const set = new Set(nums);
    if (set.size === nums.length) return false;
    return true;
};

// containsDuplicate([1,2,3,1]);
// containsDuplicate([1,2,3,4]);

