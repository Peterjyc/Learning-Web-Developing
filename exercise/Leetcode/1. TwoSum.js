/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let array = [];
    let remainder = 0;
    for (let i = 0; i < nums.length; i++){
        remainder = target - nums[i];
        if (array.includes(remainder)){
            return [array.indexOf(remainder), i]
        }
        array.push(nums[i])
    }
};
