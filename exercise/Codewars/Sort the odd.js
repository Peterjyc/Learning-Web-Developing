function sortArray(array) {
  // find odd nums, sort
  let oddNums = array.filter(num => Math.abs(num % 2) === 1).sort((a,b) => a - b)
  //replace each original odd number with the sorted numbers
  let output = []
  array.map((num, i) => 
                         Math.abs(num % 2) === 1 ? 
                         ((output[i] = oddNums[0]), oddNums.shift())
                         : output[i] = array[i]
                        )
  return output
}
