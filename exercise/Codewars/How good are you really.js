function betterThanAverage(classPoints, yourPoints) {
    let average = classPoints
    average.push(yourPoints)
    average = average.reduce((a,c) => a + c)/classPoints.length
    return (yourPoints >= average)
  }
