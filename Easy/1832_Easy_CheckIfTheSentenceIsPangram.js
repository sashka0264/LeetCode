/*
A pangram is a sentence where every letter of the English alphabet appears at least once. Given a string sentence
containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

Link: https://leetcode.com/problems/check-if-the-sentence-is-pangram

Solution:
*/

/**
 * @param {string} sentence
 * @return {boolean}
 */
const checkIfPangram = sentence => {
    let str = ''
    for (let i = 0; i < sentence.length; i++) {
        if (!str.includes(sentence[i])) str += sentence[i];
    }
    return str.length == 26;
};
