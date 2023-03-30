/*
Given an integer array nums, return the number of subarrays filled with 0. A subarray is a contiguous non-empty sequence of elements within an array.

https://leetcode.com/problems/number-of-zero-filled-subarrays/description
*/

const allVariations = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i += 1) {
        sum += 1;
        for (let y = i + 1; y < arr.length; y += 1) {
            sum += 1;
        }
    }
    return sum;
}


/**
 * @param {number[]} nums
 * @return {number}
 */
const zeroFilledSubarray = nums => {
    let r = 0;

    for (let i = 0, sum = 0; i < nums.length; i += 1) {
        if (nums[i] === 0) {
            sum += 1;
        } else {
            sum = 0;
        }
        if (sum > 0 && nums[i + 1] !== 0) {
            r += allVariations(new Array(sum).fill(0))
        }
    }

    return r;
};
