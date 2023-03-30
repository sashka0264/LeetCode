/*
Given an integer x, return true if x is palindrome integer.
An integer is a palindrome when it reads the same backward as forward.

https://leetcode.com/problems/palindrome-number
*/

/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
    if (x < 0) return false;
    const arr = String(x).split('');

    while (arr.length > 1) {
        if (arr.shift() !== arr.pop()) return false;
    }

    return true;
};
