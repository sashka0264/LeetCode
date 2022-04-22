/*
A sentence is a list of words that are separated by a single space with no leading or trailing spaces. You are given an
array of strings sentences, where each sentences[i] represents a single sentence. Return the maximum number of words
that appear in a single sentence.

Link: https://leetcode.com/problems/maximum-number-of-words-found-in-sentences

Solution:
*/

/**
 * @param {string[]} sentences
 * @return {number}
 */
const mostWordsFound = sentences => {
    let m = 0;
    for (let i = 0; i < sentences.length; i++) {
        const v = sentences[i].split(' ').length;
        if (m < v) m = v;
    }
    return m;
};
