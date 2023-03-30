/*
In a linked list of size n, where n is even, the ith node (0-indexed) of the linked list is known as the twin of the
(n-1-i)th node, if 0 <= i <= (n / 2) - 1. For example, if n = 4, then node 0 is the twin of node 3, and node 1 is the
twin of node 2. These are the only nodes with twins for n = 4. The twin sum is defined as the sum of a node and its
twin. Given the head of a linked list with even length, return the maximum twin sum of the linked list.

https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list
*/

/**
 * @param {ListNode} head
 * @return {number}
 */
const pairSum = head => {
    const map = new Map();
    let r = 0;

    for (let i = 0; head != null; i++) map.set(i, head.val), head = head.next;
    for (let i = map.size/2 - 1; i >= 0; i--) r = Math.max(map.get(i) + map.get(map.size-i-1), r);

    return r;
};
