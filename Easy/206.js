/*
Given the head of a singly linked list, reverse the list, and return the reversed list.

https://leetcode.com/problems/reverse-linked-list
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
