function sumArray(array) {
  if (array == null || array.length == 0) return 0
  let sortedArray = (array.sort((a,b) => a - b))
  let total = 0;
  for (let i = 1; i < sortedArray.length - 1; i++){
    total += sortedArray[i]
  }
  return total
}
