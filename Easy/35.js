/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return
the index where it would be if it were inserted in order. You must write an algorithm with O(log n) runtime complexity.

https://leetcode.com/problems/search-insert-position
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
    let left = 0, right = nums.length - 1, center;

    while (left < right) {
        center = Math.ceil(left + (right - left)/2);
        if (target < nums[center]) {
            right = center - 1;
        } else left = center;
    }
    return target > nums[left] ? left + 1 : left;
};
