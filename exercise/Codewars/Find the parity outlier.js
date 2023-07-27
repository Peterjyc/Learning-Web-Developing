function findOutlier(integers){
    let oddCount = 0, evenCount = 0
    for (let i = 0; i < 3; i++){
      integers[i] % 2 == 0 ? evenCount++ : oddCount++
    }
    let oddCheck = oddCount > evenCount
    let res = () => {
      return integers.filter(el => oddCheck ? el % 2 == 0 : el % 2 !== 0).reduce((a,c) => a+c)
    }
    return res()
  }
