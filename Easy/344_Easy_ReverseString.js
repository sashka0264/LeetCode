/*
Write a function that reverses a string. The input string is given as an array of characters s. You must do this by
modifying the input array in-place with O(1) extra memory.

Link: https://leetcode.com/problems/reverse-string

Solution:
*/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = s => {
    for (let i = 0, r = s.length - 1; i < r; i++, r--) {
        const p = s.length - 1 - i;
        [s[i], s[p]] = [s[p], s[i]];
    }
};
