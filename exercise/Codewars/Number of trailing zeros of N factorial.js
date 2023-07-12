function zeros (n) {
  let fiveCount = 0;
  for (let i = 5; n / i >= 1; i *= 5){
    fiveCount += Math.floor(n / i)
  }
  return fiveCount
}
