/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  strs.sort();
  for (let i = 0; i < strs[0].length; i++) {
    if (strs[0][i] !== strs[strs.length - 1][i]) return strs[0].substr(0, i);
  }
  return strs[0];
};

//The thing is with js we can sort strings and when we sort an array of different strings they will be sorted alphabetically, which means all we left to do is find the common part between the first and the last values in the sorted array. As simple as this:

