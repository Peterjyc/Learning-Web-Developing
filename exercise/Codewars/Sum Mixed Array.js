function sumMix(x){
    let sum = 0;
    x.forEach(num => {
      sum += parseInt(num)
    })
    return sum
  }

  function sumMix(x){
    return x.map(el => {
      return typeof(el) === 'string' ? Number(el) : el
    })
      .reduce((a,c) => a+c)
  }
