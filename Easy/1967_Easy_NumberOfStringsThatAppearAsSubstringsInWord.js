/*
Given an array of strings patterns and a string word, return the number of strings in patterns that exist as a substring
in word. A substring is a contiguous sequence of characters within a string.

Link: https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word

Solution:
*/

/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
const numOfStrings = (patterns, word) => {
    let r = 0;
    for (let i = 0; i < patterns.length; i += 1) if (word.includes(patterns[i])) r+= 1;
    return r;
};
