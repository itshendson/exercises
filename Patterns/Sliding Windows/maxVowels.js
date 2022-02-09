/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 var maxVowels = function(s, k) {
    let left = 0;
    let right = 0;
    let maxVowels = 0;
    let curVowelCount = 0;
    let vowels = ['a','e','i','o','u'];
    
    while (right < s.length) {
        let subStringLength = right - left + 1;
        if (vowels.includes(s[right])) curVowelCount++;
        
        if (subStringLength === k) {
            maxVowels = Math.max(maxVowels, curVowelCount);
            if (maxVowels === k) return maxVowels;
            curVowelCount = 0;
            left++;
            right = left - 1;
        }           
        right++;
    }
    return maxVowels;
};

maxVowels("ab", 2);

// Test Case:
// "abciiidef"
// 3
// "aeiou"
// 2
// "leetcode"
// 3
// "abeee"
// 3
// "a"
// 1
// "b"
// 1
// "ab"
// 2