/*
Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and
initial word order.

https://leetcode.com/problems/reverse-words-in-a-string-iii
*/

/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = s => s.split(' ').map(i => i.split('').reverse().join('')).join(' ');
