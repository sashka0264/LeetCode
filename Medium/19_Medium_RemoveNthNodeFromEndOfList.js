/*
Given the head of a linked list, remove the nth node from the end of the list and return its head.

Link: https://leetcode.com/problems/remove-nth-node-from-end-of-list

Solution:
*/

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = (head, n) => {
    let ind1 = head, ind2 = head;

    // если sz === n:
    for (let i = 0; i < n; i++) {
        ind1 = ind1.next;
    }
    if (!ind1) return head.next;

    while (ind1.next) {
        ind1 = ind1.next;
        ind2 = ind2.next;
    }

    ind2.next = ind2.next.next;
    return head;
};
