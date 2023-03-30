/*
You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the
array. Return the sum of all the unique elements of nums.

https://leetcode.com/problems/sum-of-unique-elements
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
const sumOfUnique = nums => {
    const map = new Map();
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum = sum + (map.has(nums[i]) ? -map.get(nums[i]) : nums[i]);
        map.set(nums[i], map.has(nums[i]) ? 0 : nums[i]);
    }

    return sum;
};
