function nbYear(p0, percent, aug, p) {
    let yearCount = 0
    while (p > p0){
      p0 = Math.floor(p0*(1+percent/100)+aug)
      yearCount++
    }
    return yearCount
  }
