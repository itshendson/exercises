/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1, m, nums2, n) {
    let numsLength = m + n - 1;
    let pointer1 = m - 1;
    let pointer2 = n - 1;
    
    while (numsLength >= 0) {
        if (nums1[pointer1] > nums2[pointer2] || pointer2 < 0) {
            nums1[numsLength] = nums1[pointer1--]
        } else {
            nums1[numsLength] = nums2[pointer2--]
        }
        numsLength--;
    }
};


merge([1,1,0,0], 2, [1,1], 2)

/*
Test Case:
[1,2,3,0,0,0]
3
[2,5,6]
3

[1,1,0,0]
2
[1,1]
2

[3,0]
1
[1]
1
*/