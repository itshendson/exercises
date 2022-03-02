/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersection = function(nums1, nums2) {
    let pointer1 = 0;
    let pointer2 = 0;
    let set = new Set();
    
    nums1.sort((a,b) => a - b);
    nums2.sort((a,b) => a - b);
    
    while (pointer1 < nums1.length && pointer2 < nums2.length) {
        if (nums1[pointer1] === nums2[pointer2]) {
            set.add(nums1[pointer1]);
            pointer1++;
            pointer2++;
        } else if (nums1[pointer1] > nums2[pointer2]) {
            pointer2++;
        } else {
            pointer1++;
        }
    }    
    return [...set];
};

/* Test Case
[1,2,2,1]
[2,2]

[4,9,5]
[9,4,9,8,4]

[1]
[1]

[1]
[2]

[1]
[1,2,3,4,5]

[5]
[1,2,3,4,5]
*/