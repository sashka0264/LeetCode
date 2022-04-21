/*
You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following
ones to be bad. You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a
function to find the first bad version. You should minimize the number of calls to the API.

Link: https://leetcode.com/problems/first-bad-version

Solution:
*/

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution = isBadVersion => {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return n => {
        let left = 1, right = n;
        while (left < right) {
            const center = Math.ceil(left + (right-left)/2);
            if (isBadVersion(center - 1)) {
                right = center - 1;
            } else left = center;
        }
        return left;
    };
};
