function replaceLetters(word) {
  let array = word.split("")
  let output = array.map(letter => {
    if (consonants.includes(letter)){
      let num = consonants.indexOf(letter)
      if (num < 3) return vowels[1]
      else if (num < 6) return vowels[2]
      else if (num < 11) return vowels[3]
      else if (num < 16) return vowels[4]
      else if (num < 21) return vowels[0]
    } else {
      if (letter == 'a') return alphabet[25]
      else return alphabet[alphabet.indexOf(letter)-1]
    }
  })
  return output.join("")
}
