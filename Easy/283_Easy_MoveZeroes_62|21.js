/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero
elements. Note that you must do this in-place without making a copy of the array.

Link: https://leetcode.com/problems/move-zeroes

Solution:
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = nums => {
    if (nums.length == 1) return nums;

    let left = 0, right = nums.length;
    while (left < right) {
        if (nums[left]) {
            left++;
        } else {
            nums.splice(left, 1);
            nums.push(0);
            right--;
        }
    }
    return nums;
};
