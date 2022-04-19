/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all
non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and
numbers. Given a string s, return true if it is a palindrome, or false otherwise.

Link: https://leetcode.com/problems/valid-palindrome

Solution:
*/

/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = s => {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    for (let i = 0, y = s.length - 1; i < s.length; i++, y--) {
        if (s[i] !== s[y]) return false;
    }
    return true;
};
