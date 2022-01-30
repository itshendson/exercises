/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    let i = 0;
    let j = 0;
    
    while (j <= n - 1) {
        if (nums2[j] <= nums1[i]) {
            nums1.splice(i, 0, nums2[j]);
            nums1.pop();
            i++;
            j++;
        } else if (nums1[i] === 0) {
            nums1.splice(i, 0, nums2[j]);
            nums1.pop();
            j++;
        } else if (nums2[j] > nums1[i]) {
            i++;
        }
    }

    return nums1;
};


merge([1,2,3,0,0,0], 3, [2,5,6], 3);