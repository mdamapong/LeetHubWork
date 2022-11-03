/**
 * @param {string} s
 * @return {number}
 */
// To solve this problem, you can use the trim() method.

// The trim() method removes whitespace from both ends of a string and returns a new string, without modifying the original string.

// After that, we find the index of the last space (i.e., the space before the last word) and subtract this index from the total length of the string, adjusted for the index ("-1").

var lengthOfLastWord = function(s) {
    let trimmedString = s.trim();
    
    return trimmedString.length - trimmedString.lastIndexOf(' ') - 1;
};