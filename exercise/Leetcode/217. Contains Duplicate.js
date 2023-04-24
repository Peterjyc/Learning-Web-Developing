/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let result = true;
    for (let i = 0; i < nums.length; i++){
        if (nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])){
            result = false;
        }
    }
    return result;
};
