/*
You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half
and b be the second half. Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A',
'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters. Return true if a and b are alike.
Otherwise, return false.

Link: https://leetcode.com/problems/determine-if-string-halves-are-alike

Solution:
*/

const alphabet = { a: 'a', e: 'e', i: 'i', o: 'o', u: 'u' };

/**
 * @param {string} s
 * @return {boolean}
 */
const halvesAreAlike = s => {
    s = s.toLowerCase();
    let value = 0, right = 0;

    for (let i = 0; i < s.length; i += 1) {
        if (!alphabet[s[i]]) continue;
        i >= s.length/2 ? value -= 1 : value += 1;
    }

    return value == 0;
};
