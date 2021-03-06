/**
 *  More efficient method O(n):
 */
 var findMaxAverage = function(nums, k) {
    let left = 0;
    let right = 0;
    let sum = 0;
    let avg = 0;
    let maxAvg = -Infinity;
    let subarrayLength = 0;
    
    while (right < nums.length) {
        subarrayLength = right - left + 1;
        sum += nums[right];

        if (subarrayLength === k) {
            avg = sum/k;
            maxAvg = Math.max(maxAvg, avg);
            sum -= nums[left];
            left++;
        }

        right++;
    }
    
    return maxAvg;
};

findMaxAverage([1,12,-5,-6,50,3], 4)

// Test Cases
// [1,12,-5,-6,50,3], k = 4
// [5], k = 1
// [-1], k = 1

/**
 * My original method works but has O(n^2)
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
//  var findMaxAverage = function(nums, k) {
//     let left = 0;
//     let right = 0;
//     let maxAvg = Number.NEGATIVE_INFINITY;
//     let windowLength = 0;
    
//     while (right < nums.length) {
//         windowLength = right - left + 1;
        
//         if (windowLength === k) {
//             let sum = 0, avg = 0;
//             for (let i = left; i <= right; i++) {
//                 sum += nums[i];
//             }
//             avg = sum/k;
//             maxAvg = Math.max(maxAvg, avg);
   
//             left++;
//         }
//         right++;
//     }
    
//     return maxAvg;
// };