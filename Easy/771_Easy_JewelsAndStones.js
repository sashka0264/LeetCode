/*
You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you
have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also
jewels. Letters are case sensitive, so "a" is considered a different type of stone from "A".

Link: https://leetcode.com/problems/jewels-and-stones

Solution:
*/

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
const numJewelsInStones = (jewels, stones) => {
    const regexp = new RegExp(`[^${jewels}]`, 'g');
    return stones.replace(regexp, '').length;
};