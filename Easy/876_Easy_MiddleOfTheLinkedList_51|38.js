/*
Given the head of a singly linked list, return the middle node of the linked list. If there are two middle nodes,
return the second middle node.

https://leetcode.com/problems/middle-of-the-linked-list
*/

const next = (x, steps, rev) => {
    if (!rev && x.next?.next) {
        return { x: x.next.next, steps: steps + 2 };
    }
    return { x: x.next, steps: rev ? steps - 1 : steps + 1 };
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const middleNode = head => {
    if (!head.next) return head;
    let r = head;
    let l = 0;

    while (r) {
        const data = next(r, l);
        r = data.x;
        l = data.steps;
    }

    l = (l-1)/2;

    while (l > 0) {
        const data = next(head, l, true);
        head = data.x;
        l = data.steps;
    }

    return head;
};
