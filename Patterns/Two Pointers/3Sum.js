/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    let result = [];
    
    nums = nums.sort((a,b) => a - b);
    
    for (let i = 0; i < nums.length; i++) {       
        if (nums[i] === nums[i - 1]) continue;
        let j = i + 1;
        let k = nums.length - 1;
        
        while (j < k) {
            if (nums[i] + nums[j] + nums[k] === 0) {
                result.push([nums[i], nums[j], nums[k]])
                j++;
                while (nums[j] === nums[j - 1]) j++;
            } else if (nums[i] + nums[j] + nums[k] > 0) {
                k--;
            } else {
                j++;
            }
        }
    }
    
    return result;
};



/*
[-1,0,1,2,-1,-4]
[5,5,5,5,5,5]
[0,0,0,0,0,0]
[-1,1,-1,1,-1,1]
[]
[0]
*/
