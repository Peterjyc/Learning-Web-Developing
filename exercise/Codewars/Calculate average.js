function findAverage(array) {
    if (array.length == 0) return 0
    return array.reduce((a,c) => a + c)/array.length
  }
