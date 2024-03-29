/*
You are given the root of a binary tree that consists of exactly 3 nodes: the root, its left child, and its right child.
Return true if the value of the root is equal to the sum of the values of its two children, or false otherwise.

https://leetcode.com/problems/root-equals-sum-of-children
*/

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const checkTree = root => root.val == root.right.val + root.left.val;
