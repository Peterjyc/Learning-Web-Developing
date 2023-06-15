function smaller(nums) {
    let output = [];
    for (let i = 0; i < nums.length; i++){
      let current = nums.filter((el, index) => (el < nums[i] && index > i))
      output.push(current.length)
    }
    return output
  }
