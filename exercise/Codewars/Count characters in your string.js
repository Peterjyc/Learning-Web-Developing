function count(string) {
  let count = new Object
  let array = string.split('')
  for (let i = 0; i < array.length; i++){
    let current = string[i]
    count[current] ? count[current] += 1 : count[current] = 1
  }
  return count
}
