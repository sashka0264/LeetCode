/*
Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that
they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where
1 <= index1 < index2 <= numbers.length. Return the indices of the two numbers, index1 and index2, added by one as an
integer array [index1, index2] of length 2. The tests are generated such that there is exactly one solution. You may not
use the same element twice. Your solution must use only constant extra space.

Link: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted

Solution:
*/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (numbers, target) => {
    if (!target) return [1, 2];

    const map = new Map();

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i-1] + numbers[i] == target) return [i, i + 1];
        map.set(numbers[i], i);
    }

    for (let key of map.keys()) {
        if (map.has(target-key)) return [map.get(key) + 1, map.get(target-key) + 1]
    }
};
