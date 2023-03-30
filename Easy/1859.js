/*
A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each word
consists of lowercase and uppercase English letters. A sentence can be shuffled by appending the 1-indexed word
position to each word then rearranging the words in the sentence. For example, the sentence "This is a sentence" can be
shuffled as "sentence4 a3 is2 This1" or "is2 sentence4 This1 a3". Given a shuffled sentence s containing no more than 9
words, reconstruct and return the original sentence.

https://leetcode.com/problems/sorting-the-sentence
*/

/**
 * @param {string} s
 * @return {string}
 */
const sortSentence = s => {
    const arr = s.split(' ');
    const res = [];

    for (let i = 0; i < arr.length; i += 1) {
        s.indexOf(i)
        res[+arr[i].substr(arr[i].length - 1) - 1] = arr[i].slice(0, arr[i].length - 1);
    }
    return res.join(' ');
};
