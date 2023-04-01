/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let arr = [];
    let x, y = 0
    for (let i = 0; i < nums.length; i++){
        console.log("i: " + i)
        let diff = target - nums[i];
        if (arr.includes(diff)){
            x = nums.indexOf(diff);
            if (nums.indexOf(nums[i]) == nums.indexOf(diff)) {
                console.log("a")
                y = nums.indexOf(nums[i], nums.indexOf(nums[i])+1);
            } else {
                y = nums.indexOf(nums[i])
                console.log("b")
            }
            console.log(x, y)
            break;
        } else {
            arr.push(nums[i])
        }
    }
    return [x,y];
};
