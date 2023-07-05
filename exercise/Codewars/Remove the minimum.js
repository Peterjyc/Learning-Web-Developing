function removeSmallest(numbers) {
    let min = Math.min(...numbers)
    let minLocation = numbers.indexOf(min)
    let array = numbers.filter((x, i) => i !== minLocation)
    return array
  }
