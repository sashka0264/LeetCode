/*
You are given an array of strings words and a string pref. Return the number of strings in words that contain pref as a
prefix. A prefix of a string s is any leading contiguous substring of s.

Link: https://leetcode.com/problems/counting-words-with-a-given-prefix

Solution:
*/

/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
const prefixCount = (words, pref) => words.filter(word => word.startsWith(pref)).length;
