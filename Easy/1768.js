/*
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with
word1. If a string is longer than the other, append the additional letters onto the end of the merged string. Return the
merged string.

https://leetcode.com/problems/merge-strings-alternately
*/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = (word1, word2) => {
    const m = Math.max(word1.length, word2.length);
    let r = '', i = 0;

    while (i < m) {
        if (word1[i]) r += word1[i];
        if (word2[i]) r += word2[i];
        i += 1;
    }

    return r;
};
