/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = strs => {
    let prefix = '', i = 0, y = 0;
    if (!strs.length) return prefix;

    while (i < strs.length) {
        newPrefix = strs[i][y] ? (prefix + strs[i][y]) : null;

        if (strs[i].indexOf(newPrefix) !== 0 && newPrefix || strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            break;

        }

        if (i + 1 === strs.length && newPrefix) {
            i = 0;
            y += 1;
            prefix = newPrefix;
        } else {
            i += 1;
        }
    }

    return prefix;
};
