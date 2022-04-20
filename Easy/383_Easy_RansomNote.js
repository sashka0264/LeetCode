/*
Given two strings ransomNote and magazine, return true if ransomNote can be constructed from magazine and false
otherwise. Each letter in magazine can only be used once in ransomNote.

Link: https://leetcode.com/problems/ransom-note

Solution:
*/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = (ransomNote, magazine) => {
    const map = new Map();
    for (let i = 0; i < magazine.length; i++) {
        map.set(
            magazine[i],
            map.has(magazine[i]) ? map.get(magazine[i]) + 1 : 1
        )
    }
    for (let x = 0; x < ransomNote.length; x++) {
        if (!map.get(ransomNote[x])) return false;
        map.set(ransomNote[x], map.get(ransomNote[x]) - 1);
    }
    return true;
};
