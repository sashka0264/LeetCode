/*
ou are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the
ith item. You are also given a rule represented by two strings, ruleKey and ruleValue. The ith item is said to match the
rule if one of the following is true: ruleKey == "type" and ruleValue == typei, ruleKey == "color" and ruleValue
== colori, ruleKey == "name" and ruleValue == namei. Return the number of items that match the given rule.

Link: https://leetcode.com/problems/count-items-matching-a-rule

Solution:
*/

/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
const countMatches = (items, ruleKey, ruleValue) => {
    let r = 0;
    const indexes = { type: 0, color: 1, name: 2 };

    items.forEach(item => {
        if (item[indexes[ruleKey]] == ruleValue) r += 1;
    });
    return r;
};
