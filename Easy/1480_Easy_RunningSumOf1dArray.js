/*
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]). Return the running
sum of nums.

Link: https://leetcode.com/problems/running-sum-of-1d-array

Solution:
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = nums => {
    for (let i = 1; i < nums.length; i += 1) {
        nums[i] = nums[i-1] + nums[i];
    }
    return nums;
}
