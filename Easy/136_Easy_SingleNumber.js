/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
You must implement a solution with a linear runtime complexity and use only constant extra space.

Link: https://leetcode.com/problems/single-number

Solution:
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = nums => nums.reduce((a, c) => a ^ c);
