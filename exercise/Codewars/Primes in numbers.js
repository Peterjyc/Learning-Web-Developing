function primeFactors(n){
    //2*2*2*2*2*5*7*7*11 = 86240
  let primeNums = []
  let primeCounts = []
  for (let i = 2; i <= n; i++){
    let num = i
    let temp = n
    if (n % num == 0) {
      let count = 0
      while (temp % num === 0){
        temp = temp / num
        count++
      }
      n = temp
      primeNums.push(num)
      primeCounts.push(count)
    }

  }
  let string = ''
  for (let i = 0; i < primeNums.length; i++){
    if (primeCounts[i] > 1) {
      string += `(${primeNums[i]}**${primeCounts[i]})`
    }else {
      string += `(${primeNums[i]})`
    }
  }
  return string
}
