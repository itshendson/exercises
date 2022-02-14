/**
 * @param {string[]} words
 * @return {string}
 */
 var firstPalindrome = function(words) {   
    for (word in words) {
        let reversed = words[word].split('').reverse().join('');
        if (words[word] === reversed) return words[word];
    }
    return "";
};

firstPalindrome(["abc","aedea","racecar","cool"])

/*
Test Case:
["abc","car","ada","racecar","cool"]
["notapalindrome","racecar"]
["def","ghi"]
*/