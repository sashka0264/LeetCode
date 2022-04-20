/*
Given an integer n, return a string array answer (1-indexed) where:
- answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
- answer[i] == "Fizz" if i is divisible by 3.
- answer[i] == "Buzz" if i is divisible by 5.
- answer[i] == i (as a string) if none of the above conditions are true.

Link: https://leetcode.com/problems/fizz-buzz

Solution:
*/

/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = n => new Array(n)
    .fill(0)
    .map((e,i) => (++i % 3 == 0 ? 'Fizz' : '') + (i % 5 == 0 ? 'Buzz' : '') || '' + i);
