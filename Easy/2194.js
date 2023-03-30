/*
A cell (r, c) of an excel sheet is represented as a string "<col><row>" where: <col> denotes the column number c of the
cell. It is represented by alphabetical letters. For example, the 1st column is denoted by 'A', the 2nd by 'B', the 3rd
by 'C', and so on. <row> is the row number r of the cell. The rth row is represented by the integer r. You are given a
string s in the format "<col1><row1>:<col2><row2>", where <col1> represents the column c1, <row1> represents the row r1,
<col2> represents the column c2, and <row2> represents the row r2, such that r1 <= r2 and c1 <= c2. Return the list of
cells (x, y) such that r1 <= x <= r2 and c1 <= y <= c2. The cells should be represented as strings in the format
mentioned above and be sorted in non-decreasing order first by columns and then by rows.

https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet
*/

/**
 * @param {string} s
 * @return {string[]}
 */
const cellsInRange = s => {
    const r = [],
        endA = s[3].charCodeAt(0) - 96,
        endN = +s[4],
        startN = +s[1];
    let start = startN,
        startA = s[0].charCodeAt(0) - 96;

    while (startA <= endA) {
        r.push(`${String.fromCharCode(96 + startA)}${start}`)
        start < endN ? (start += 1) : (start = startN, startA += 1);
    }

    return r;
};
