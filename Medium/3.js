/*
Given a string s, find the length of the longest substring without repeating characters.

https://leetcode.com/problems/longest-substring-without-repeating-characters
*/

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = s => {
    const map = new Map();
    let r = 0;

    for (let i = 0, j = 0; i < s.length; i += 1) {
        if (map.has(s[i])) j = Math.max(map.get(s[i]), j);
        r = Math.max(r, i + 1 - j);
        map.set(s[i], i + 1);
    }
    return r;
};
