/*
You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent
if all characters in the string appear in the string allowed. Return the number of consistent strings in the array
words.

https://leetcode.com/problems/count-the-number-of-consistent-strings
*/

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
const countConsistentStrings = (allowed, words) => words
    .filter(word => [...word].every(letter => allowed.includes(letter))).length;
