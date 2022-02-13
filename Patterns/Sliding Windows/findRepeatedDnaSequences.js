/**
 * @param {string} s
 * @return {string[]}
 */
 var findRepeatedDnaSequences = function(s) {
    let right = 0;
    let temp = ""
    let seen = new Set();
    let results = new Set();
    
    while (right < s.length) {
        temp += s[right];
        
        if (temp.length === 10) {
            if (seen.has(temp)) {
                results.add(temp);
            } else if (!seen.has(temp)) {
                seen.add(temp)
            }
            temp = temp.substring(1);
        }
        
        right++;
    }
    
    return [...results]
};

findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT");


/* Test Cases
"AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
"AAAAAAAAAAAAA"
"AAA
*/
