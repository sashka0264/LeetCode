/*
International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as
follows: 'a' maps to ".-", 'b' maps to "-...", 'c' maps to "-.-.", and so on. For convenience, the full table for the
26 letters of the English alphabet is given below:

[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...",
"-","..-","...-",".--","-..-","-.--","--.."]

Given an array of strings words where each word can be written as a concatenation of the Morse code of each letter. For
example, "cab" can be written as "-.-..--...", which is the concatenation of "-.-.", ".-", and "-...". We will call such
a concatenation the transformation of a word. Return the number of different transformations among all words we have.

https://leetcode.com/problems/unique-morse-code-words
*/

const s = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",
    ".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

/**
 * @param {string[]} words
 * @return {number}
 */
const uniqueMorseRepresentations = words => {
    const map = [];
    let strM = '';

    for (let i = 0; i < words.length; i += 1) {
        for (let y = 0; y < words[i].length; y += 1) {
            const code = s[words[i][y].charCodeAt(0) - 97];
            strM += code;
        }
        if (!map.includes(strM)) map.push(strM);
        strM = '';
    }

    return map.length;
};
