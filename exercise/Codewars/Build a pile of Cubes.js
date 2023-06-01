function findNb(m) {
  //m is total volume
  let sum = m
  //use loop to iterate from top to bottom, keep track of sum
  let i = 0;
  while (sum > 0){
    i++
    sum -= Math.pow(i,3)
  }
  return (sum === 0) ? i : -1
 }
