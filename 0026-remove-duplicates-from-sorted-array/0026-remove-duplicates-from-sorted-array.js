/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for (var i = nums.length-1; i >= 0; i--) {       
        if(nums[i] === nums[i-1]) {
            nums.splice(i, 1);
        }
    }
};