/*
You are given coordinates, a string that represents the coordinates of a square of the chessboard. Below is a chessboard
for your reference. Return true if the square is white, and false if the square is black. The coordinate will always
represent a valid chessboard square. The coordinate will always have the letter first, and the number second.

Link: https://leetcode.com/problems/determine-color-of-a-chessboard-square

Solution:
*/

/**
 * @param {string} coordinates
 * @return {boolean}
 */
const squareIsWhite = coordinates => (
    Number(coordinates[0].charCodeAt(0) - 96 + Number(coordinates[1])) % 2 > 0
);
