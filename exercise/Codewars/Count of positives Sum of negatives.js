function countPositivesSumNegatives(input) {
    if (input === null || input.length == 0) return []
    let posCount = input.filter(el => el > 0).length
    let negCount = input.filter(el => el < 0).reduce((a,c) => a+c, 0)
    return [posCount, negCount]
  }
