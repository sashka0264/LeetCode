/*
Given an integer number n, return the difference between the product of its digits and the sum of its digits.

https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer

Solution:
*/

/**
 * @param {number} n
 * @return {number}
 */
const subtractProductAndSum = n => {
    n = Array.from(String(n), Number);
    return n.reduce((a, b) => a * b) - n.reduce((a, b) => a + b);
};
