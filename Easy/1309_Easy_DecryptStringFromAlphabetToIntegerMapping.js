/*
You are given a string s formed by digits and '#'. We want to map s to English lowercase characters as follows:
Characters ('a' to 'i') are represented by ('1' to '9') respectively. Characters ('j' to 'z') are represented by
('10#' to '26#') respectively. Return the string formed after mapping. The test cases are generated so that a unique
mapping will always exist.

Link: https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping

Solution:
*/

/**
 * @param {string} s
 * @return {string}
 */
const freqAlphabets = s => {
    let arr = [];
    for (let i = 0; i < s.length; i += 1) {
        const l = i + 2 < s.length && s[i+2] == '#';
        arr.push(String.fromCharCode(
            96 + Number(l ? s[i] + s[i+1] + s[i+2].slice(0, s[i+2].length-1) : s[i])
        ));
        if (l) i += 2;
    }
    return arr.join('');
};
