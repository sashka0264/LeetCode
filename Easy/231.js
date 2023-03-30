/*
Given an integer n, return true if it is a power of two. Otherwise, return false. An integer n is a power of two, if
there exists an integer x such that n == 2x.

https://leetcode.com/problems/power-of-two
*/

/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = n => Math.log2(n) % 1 == 0;
