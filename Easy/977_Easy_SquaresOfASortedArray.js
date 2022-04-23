/*
Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in
non-decreasing order.

Link: https://leetcode.com/problems/squares-of-a-sorted-array

Solution:
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = nums => nums.map(i => Math.pow(i, 2)).sort((a, b) => a - b);
