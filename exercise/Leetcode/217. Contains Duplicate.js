/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let result = false;
    let array = [];
    for (let i = 0; i < nums.length; i++){
        if (array.includes(nums[i])){
            result = true;
        }
        array.push(nums[i])
    }
    return result;
};
