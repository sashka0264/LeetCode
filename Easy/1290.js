/*
Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or
1. The linked list holds the binary representation of a number. Return the decimal value of the number in the linked
list.

https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer

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
