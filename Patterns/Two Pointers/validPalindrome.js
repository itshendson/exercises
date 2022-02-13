/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {   
    s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) return false;
        left++;
        right--;
    }
    return true;
};

/**
 * @param {string} s
 * @return {boolean}
 * First method, very slow...apparently
 */
/* var isPalindromeOldMethod = function(s) {
    let alphanumeric = ['1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let sLowerCase = s.toLowerCase();
    let str = "";
    
    for (el in sLowerCase) {
        if (alphanumeric.includes(sLowerCase[el])) str += sLowerCase[el];
    }
    
    let reversed = str.split('').reverse().join('');
    let result = str === reversed ? true : false;
    return result
}; */

isPalindrome("0P");

/* 
 * Test Case
 * "121"
 * "A man, a plan, a canal: Panama"
 * "A,boba"
 * "race a car"
 * " "
 * "+"
 * "0P"
 */
