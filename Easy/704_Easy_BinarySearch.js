/*
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search
target in nums. If target exists, then return its index. Otherwise, return -1. You must write an algorithm with O(log n)
runtime complexity.

https://leetcode.com/problems/binary-search
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
    let left = 0, right = nums.length - 1;

    while (left < right) {
        const center = left + Math.ceil((right-left)/2);
        if (target < nums[center]) {
            right = center - 1;
        } else left = center;
    }
    return nums[left] == target ? left : -1;
};
