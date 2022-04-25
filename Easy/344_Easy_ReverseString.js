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
    for (let i = 0, y = s.length - 1; i < y; i++, y--) [s[y], s[i]] = [s[i], s[y]];
    return s;
};
