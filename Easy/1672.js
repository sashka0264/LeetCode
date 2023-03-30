/*
You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the ith customer has in the
jth bank. Return the wealth that the richest customer has. A customer's wealth is the amount of money they have in all
their bank accounts. The richest customer is the customer that has the maximum wealth.

https://leetcode.com/problems/richest-customer-wealth
*/

/**
 * @param {number[][]} accounts
 * @return {number}
 */
const maximumWealth = accounts => {
    let m = 0;
    for (let i = 0; i < accounts.length; i++) {
        m = Math.max(m, accounts[i].reduce((a, b) => a + b));
    }
    return m;
};
