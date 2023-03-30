/*
Given the head of a singly linked list, return true if it is a palindrome.

https://leetcode.com/problems/palindrome-linked-list
*/

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = head => {
    let slow = head, // массив чисел с шагом по 1 или null
        fast = head, // массив чисел с шагом по 2 или null
        prev, temp;

    while (fast && fast.next) slow = slow.next, fast = fast.next.next;
    prev = slow;
    slow = slow.next;
    prev.next = null


    while (slow) temp = slow.next, slow.next = prev, prev = slow, slow = temp;
    fast = head;
    slow = prev;

    while (slow) {
        if (fast.val !== slow.val) return false;
        fast = fast.next, slow = slow.next;
    }
    return true
};
