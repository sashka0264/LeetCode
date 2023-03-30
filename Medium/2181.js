/*
You are given the head of a linked list, which contains a series of integers separated by 0's. The beginning and end of
the linked list will have Node.val == 0. For every two consecutive 0's, merge all the nodes lying in between them into
a single node whose value is the sum of all the merged nodes. The modified list should not contain any 0's. Return the
head of the modified linked list.

https://leetcode.com/problems/merge-nodes-in-between-zeros
*/

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const mergeNodes = head => {
    const map = new Map();
    let copy_1 = head, copy_2 = head, sum = 0;

    while (copy_1) {
        if (copy_1.val) {
            sum += copy_1.val;
        } else if (sum != 0) {
            map.set(map.size + 1, sum), sum = 0;
        }
        copy_1 = copy_1.next;
    }

    for (let [ index, val ] of map.entries()) {
        copy_2.val = val;
        if (map.size == index) {
            copy_2.next = null;
            return head;
        }
        copy_2 = copy_2.next;
    }
};
