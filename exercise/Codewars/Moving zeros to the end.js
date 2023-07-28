function moveZeros(arr) {
    let zeroArray = arr.filter(el => el === 0)
    let arrayWithoutZero = arr.filter(el => el !== 0)
    return arrayWithoutZero.concat(zeroArray)
  }
