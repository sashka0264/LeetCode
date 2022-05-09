/*
There are n rings and each ring is either red, green, or blue. The rings are distributed across ten rods labeled from 0
to 9. You are given a string rings of length 2n that describes the n rings that are placed onto the rods. Every two
characters in rings forms a color-position pair that is used to describe each ring where:
- The first character of the ith pair denotes the ith ring's color ('R', 'G', 'B').
- The second character of the ith pair denotes the rod that the ith ring is placed on ('0' to '9').
For example, "R3G2B1" describes n == 3 rings: a red ring placed onto the rod labeled 3, a green ring placed onto the rod
labeled 2, and a blue ring placed onto the rod labeled 1. Return the number of rods that have all three colors of rings
on them.

Link: https://leetcode.com/problems/rings-and-rods

Solution:
*/

/**
 * @param {string} rings
 * @return {number}
 */
const countPoints = rings => {
    const map = new Map();
    let count = 0;

    for (let i = 1; i < rings.length; i += 2) {
        const g = map.get(rings[i]);

        if (!g) {
            map.set(rings[i], rings[i - 1]);
        } else if (!g.includes(rings[i - 1])) {
            map.set(rings[i], g + rings[i - 1]);
        }

    }

    for (let value of map.values()) if (value.length == 3) count += 1;

    return count;
};
