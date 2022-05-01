/*
You are given two linked lists: list1 and list2 of sizes n and m respectively. Remove list1's nodes from the ath node to
the bth node, and put list2 in their place.

Link: https://leetcode.com/problems/merge-in-between-linked-lists

Solution:
*/

/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeInBetween = (list1, a, b, list2) => {
    let copy = list1, other = list2, toA, i = 0;
    a = --a;

    while (i <= b) {
        if (i == a) {
            toA = copy;
        }
        copy = copy.next, i++;
    }

    while (other) {
        if (!other.next) {
            other.next = copy;
            break;
        }
        other =  other.next;
    }
    toA.next = list2;

    return list1;
};
