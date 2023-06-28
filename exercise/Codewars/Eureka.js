function sumDigPow(a, b) {
  let result = []
  for(let i = a; i < b; i++){
    let array = String(i).split('')
    let sum = array.map((num, i) => Math.pow(Number(num),i+1)).reduce((a,c) => a + c)
    if (Number(array.join('') == sum)) {
        result.push(sum)
      }
  }
  return result
}
