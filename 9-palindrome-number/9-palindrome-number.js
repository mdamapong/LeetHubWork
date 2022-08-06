/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function (x) {
//if X is negative ( not a palindrome )
  if (x < 0) { 
    return false;
  }
//if X is less than ten ( always a palindrome )
  if (x < 10) { 
    return true;
  }
    //if X has 0 at its last digit and X is not 0 itself ( not a palindrome ) e.g. 10, 130 whose reverse will be 01, 031 respectively

  if (x % 10 === 0 && x !== 0) { 
    return false;
  }

  const str = String(x);
  let i = 0, j = str.length - 1;

  while (i < j) {
    if (str[i] !== str[j]) {
      return false;
    }

    i++;
    j--;
  }

  return true;
};
