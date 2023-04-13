function getCount(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u']
  let letters = str.split("");
  let count = 0;
  for (let i = 0; i < letters.length; i++){
    if (vowels.includes(letters[i])) {
      count++;
    }
  }
  return count;
}
