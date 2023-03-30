/*
Given an array, rotate the array to the right by k steps, where k is non-negative.

https://leetcode.com/problems/rotate-array
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = (nums, k) => {
    nums.push(...nums.splice(0, nums.length - k % nums.length));
    return nums;
};
