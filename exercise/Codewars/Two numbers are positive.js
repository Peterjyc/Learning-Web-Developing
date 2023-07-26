function twoArePositive(a, b, c) {
    let posCount = 0, negCount = 0, array = [a, b, c]
    array.forEach(el => {
      el > 0 ? posCount++ : negCount++
    })
    return posCount == 2 && negCount == 1
  }
