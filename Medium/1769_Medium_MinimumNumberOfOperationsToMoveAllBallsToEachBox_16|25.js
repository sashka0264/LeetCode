/*
You have n boxes. You are given a binary string boxes of length n, where boxes[i] is '0' if the ith box is empty, and
'1' if it contains one ball. In one operation, you can move one ball from a box to an adjacent box. Box i is adjacent
to box j if abs(i - j) == 1. Note that after doing so, there may be more than one ball in some boxes. Return an array
answer of size n, where answer[i] is the minimum number of operations needed to move all the balls to the ith box. Each
answer[i] is calculated considering the initial state of the boxes.

Link: https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box

Solution:
*/

/**
 * @param {string} boxes
 * @return {number[]}
 */
const minOperations = boxes => {
    const r = [];

    for (let i = 0, operations = 0, boxInd = 0; boxInd < boxes.length; i+= 1) {
        if (i == boxInd) continue;

        if (boxes[i] > 0) operations += Math.abs(boxInd - i);

        if (i == boxes.length) {
            r.push(operations);
            operations = 0;
            i = -1;
            boxInd += 1;
        } else continue;
    }

    return r;
};
