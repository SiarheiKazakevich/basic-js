const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const freq1 = {};
  const freq2 = {};

  // Populate hash table for s1
  for (const char of s1) {
    freq1[char] = (freq1[char] || 0) + 1;
  }

  // Populate hash table for s2 and count common characters
  let commonCount = 0;
  for (const char of s2) {
    if (freq1[char] > 0) {
      // Increment common count and decrement frequency
      commonCount++;
      freq1[char]--;
    }
  }

  return commonCount;
}

module.exports = {
  getCommonCharacterCount,
};
