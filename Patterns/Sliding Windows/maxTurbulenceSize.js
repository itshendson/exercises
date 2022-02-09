/**
 * @param {number[]} arr
 * @return {number}
 */
 var maxTurbulenceSize = function(arr) {
    let left = 0;
    let right = 1;
    let maxTurbulentCount = 0;
    let curTurbulentCount = 0;
    
    if (arr.length <= 1) return 1;
    
    while (right < arr.length) {
        curTurbulentCount = right - left + 1;

        if (!isTurbulent(arr, right)) {
            if (arr[right - 1] === arr[right]) curTurbulentCount--;
            maxTurbulentCount = Math.max(maxTurbulentCount, curTurbulentCount);
            left = right;
        }
        
        right++
    }
    
    return maxTurbulentCount;
};

var isTurbulent = function(arr, right) {
    if (arr[right - 1] < arr[right] && arr[right] > arr[right + 1]) return true;
    if (arr[right - 1] > arr[right] && arr[right] < arr[right + 1]) return true;
    return false;
}

maxTurbulenceSize([4,8,4,2]);

// Test Case
// [9,4,2,10,7,8,8,1,9]
// [4,8,12,16]
// [100]
// [2,1,2,3,2]
// [1,1,1,1,1,1,1,1,1]
// [1,1]
// [1,2,1,1]

// Note: JavaScript does not have an 'index out of bound error'. 
// When you try to point to an element that is out of bound, it simply returns undefined. When you try to use an equality comparison and one of the comparators is 'undefined', the equality evaluates to false.