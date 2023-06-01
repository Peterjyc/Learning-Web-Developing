function findMissingLetter(array)
{
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
  let pos = 0, prev = 0, output = ""
  let arr = array.map(letter => letter.toLowerCase())
  for (let i = 0; i < arr.length; i++){
    pos = alphabet.indexOf(arr[i])
    if (pos - prev == 2 && i > 0){
      output = alphabet[pos - 1]
    }
    prev = pos
  }
  return (array[0] === arr[0]) ? output : output.toUpperCase();
}
