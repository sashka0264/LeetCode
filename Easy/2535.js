/*
Difference Between Element Sum and Digit Sum of an Array. You are given a positive integer array nums. The element sum is the sum of all the elements 
in nums. The digit sum is the sum of all the digits (not necessarily distinct) that appear in nums. Return the absolute difference between the element 
sum and digit sum of nums. Note that the absolute difference between two integers x and y is defined as |x - y|.

https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
const differenceOfSum = nums => {
    let sum1 = 0;
    let sum2 = 0;

    for (let i = 0; i < nums.length; i += 1) {
        sum1 += nums[i];
        sum2 += nums[i].toString().split('').reduce((sum, next) => +sum + +next, 0);
    }
    
    return sum1 - sum2;
};
