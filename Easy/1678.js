/*
You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or
"(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the
string "al". The interpreted strings are then concatenated in the original order. Given the string command, return the
Goal Parser's interpretation of command.

https://leetcode.com/problems/goal-parser-interpretation
*/

/**
 * @param {string} command
 * @return {string}
 */
const interpret = command => {
    if (command == 'G') return 'G';

    let r = '';
    for (let i = 0; i < command.length; i += 1) {
        if (command[i] == 'G') {
            r += command[i];
        } else if (command[i] == '(' && command[i+1] == ')') {
            r += 'o';
            i += 1;
        } else {
            r += 'al';
            i += 3;
        }
    }
    return r;
};
