function towerBuilder(nFloors) {
  let output = []
  for (let i = 1; i <= nFloors; i++){
    let space = " ".repeat(nFloors - i)
    let star = "*".repeat((i * 2) - 1)
    output.push(`${space}${star}${space}`)
  }
  return output
    
}
