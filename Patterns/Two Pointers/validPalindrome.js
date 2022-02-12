/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    let alphanumeric = ['1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let sLowerCase = s.toLowerCase();
    let str = "";
    
    for (el in sLowerCase) {
        if (alphanumeric.includes(sLowerCase[el])) str += sLowerCase[el];
    }
    
    let reversed = str.split('').reverse().join('');
    let result = str === reversed ? true : false;
    return result
};

isPalindrome("+");

/* 
 * Test Case
 * "121"
 * "A man, a plan, a canal: Panama"
 * "race a car"
 * " "
 * "+"
 * "0P"
 */
