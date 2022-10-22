/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  //run through array to grab the first number
    for (let i = 0; i < nums.length; i++) {
        //run through nums next from i  to grab the sec number
        for (let j = i + 1; j < nums.length; j++) {
            //set if condition if i+j = target
            if (nums[i] + nums[j] == target) {
                //return the index that add to target
                return [i, j]
            }
        }
    }
};