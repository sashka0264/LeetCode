/*
Given an integer num, return the number of steps to reduce it to zero. In one step, if the current number is even, you
have to divide it by 2, otherwise, you have to subtract 1 from it.

Link: https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero

Solution:
*/

/**
 * @param {number} num
 * @return {number}
 */
const numberOfSteps = num => {
    let steps = 0;
    while (num && ++steps) {
        num % 2 ? --num : num /= 2;
    }
    return steps;
};
