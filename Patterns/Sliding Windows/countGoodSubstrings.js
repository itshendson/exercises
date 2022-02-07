/**
 * @param {string} s
 * @return {number}
 */
 var countGoodSubstrings = function(s) {
    right = 0;
    k = 3;
    result = 0;
    
    if (s.length < k) return 0;
    
    while (right < s.length - k + 1) {     
        if (s.charAt(right) !== s.charAt(right + 1) && s.charAt(right) !== s.charAt(right + 2) && s.charAt(right + 1) !== s.charAt(right + 2)) {
            result++;
        }
        right++;
    }
    return result;
};

countGoodSubstrings("xyzzaz")

// Test Cases:
// "xyzzaz"
// "abc"
// "ab"
// "a"
// "owuxoelszb"
// "aababcabc"