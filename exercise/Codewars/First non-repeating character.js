function firstNonRepeatingLetter(s) {
  const array = s.split('')
  let count = {}
  for (let i = 0; i < array.length; i++){
    //if count has array[i]
    if (count[array[i]] >= 0) {
        count[array[i]] = count[array[i]] + 1 
      } else {
        count[array[i]] = 0
      }
    //if count doesn't have array[i]
      //add count.array[i] = 1
    console.log(count)
    
  }
  return 'a'
}
