/*
Given the head of a singly linked list, reverse the list, and return the reversed list.

Link: https://leetcode.com/problems/reverse-linked-list

Solution:
*/

/**
 * @param {ListNode} head
 * @return {number}
 */
const getDecimalValue = head => {
    let s = '';
    while (head) {
        s += head.val;
        head = head.next;
    }
    return parseInt(s, 2);
};
