/*
You are given an m x n binary matrix mat of 1's (representing soldiers) and 0's (representing civilians). The soldiers
are positioned in front of the civilians. That is, all the 1's will appear to the left of all the 0's in each row. A
row i is weaker than a row j if one of the following is true: The number of soldiers in row i is less than the number
of soldiers in row j. Both rows have the same number of soldiers and i < j. Return the indices of the k weakest rows in
the matrix ordered from weakest to strongest.

Link: https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix

Solution:
*/

/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
const kWeakestRows = (mat, k) => mat
    .map((item, i) => ({ i, m: item.reduce((a, b) => a + b)}))
    .sort((a, b) => a.m - b.m)
    .map(item => item.i)
    .slice(0, k);
