/*
Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an
empty string "". A string is palindromic if it reads the same forward and backward.

https://leetcode.com/problems/find-first-palindromic-string-in-the-array
*/

/**
 * @param {string[]} words
 * @return {string}
 */
const firstPalindrome = words => {
    for (let i = 0; i < words.length; i += 1) {
        if (words[i] == words[i].split('').reverse().join('')) return words[i];
    }
    return '';
};
