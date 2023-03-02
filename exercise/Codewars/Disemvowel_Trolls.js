function disemvowel(str) {
  let array = str.split("");
  let vowels = ['a', 'e', 'i', 'o', 'u']
  let result = "";
  array.forEach(letter => {
    if (!vowels.includes(letter.toLowerCase())){
      result += letter;
    }
  })
  return result;
}
