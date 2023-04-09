function oddOrEven(array) {
    if (array.length === 0) return "even"
    let total = array.reduce((a, c) => a + c)
    console.log(total)
    if (Math.abs(total % 2) === 1) return "odd"
    else return "even"
  }
