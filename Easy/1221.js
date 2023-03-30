/*
Balanced strings are those that have an equal quantity of 'L' and 'R' characters. Given a balanced string s, split it
in the maximum amount of balanced strings. Return the maximum amount of split balanced strings.

https://leetcode.com/problems/split-a-string-in-balanced-strings
*/

/**
 * @param {string} s
 * @return {number}
 */
const balancedStringSplit = s => {
    const map = { R: 0, L: 0 };
    let count = 0;

    for (let i = 0; i < s.length; i += 1) {
        if (map.R == map.L && map.R) {
            map.R = 0;
            map.L = 0;
            count += 1;
        }
        map[s[i]] += 1;
    }
    return count + 1;
};
