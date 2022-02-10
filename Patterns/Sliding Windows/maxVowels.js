/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 * Second attempt at a more optimal solution.
 */
 var maxVowels = function(s, k) {
    let left = 0;
    let right = 0;
    let maxVowels = 0;
    let curVowels = 0;
    let vowels = ['a','e','i','o','u'];
    
    while (right < s.length) {
        let subStringLength = right - left + 1;
        if (vowels.includes(s[right])) curVowels++;
        
        if (subStringLength === k) {
            maxVowels = Math.max(maxVowels, curVowels);
            if (vowels.includes(s[left])) curVowels--;
            left++;
        }
        
        right++;
        if (maxVowels === k) return maxVowels;
    }
    return maxVowels;
};

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 * This was my initial approach. Unfortunately, it exceeded the time limit.
 * This is not O(n) as I originally thought. Notice how you keep resetting curVowels and your two pointers via "curVowels = 0," "left++", and "right = left - 1".
 * Everytime you reset your pointers, you're actually REDOING letters in s that you've already checked to see if it's a vowel. 
 * By resetting everytime, you're not actually sliding a window, you're opening and shutting it over and over again.
 * Sure, this produces the correct answer, but leads to a time complexity of O(n*k).
 */
//  var maxVowels = function(s, k) {
//     let left = 0;
//     let right = 0;
//     let maxVowels = 0;
//     let curVowels = 0;
//     let vowels = ['a','e','i','o','u'];
    
//     while (right < s.length) {
//         let subStringLength = right - left + 1;
//         if (vowels.includes(s[right])) curVowels++;
        
//         if (subStringLength === k) {
//             maxVowels = Math.max(maxVowels, curVowels);
//             if (maxVowels === k) return maxVowels;
//             curVowels = 0;
//             left++;
//             right = left - 1;
//         }           
//         right++;
//     }
//     return maxVowels;
// };

maxVowels("abciiidef", 3);

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