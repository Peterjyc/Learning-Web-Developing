function squareSum(numbers){
  if (numbers.length == 0) return 0;
  return numbers.reduce((a, c) => a + Math.pow(c,2), 0)
}
