/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to
target. You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

https://leetcode.com/problems/two-sum
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    let data = {};

    for (let i = 0; i < nums.length; i++) {
        const number = nums[i];
        if (data[target - number] !== undefined) {
            return [data[target - number], i];
        } else {
            data[number] = i;
        }
    }

    return [];
};
