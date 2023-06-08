function rot13(message){
  const capitals = message.split('').map(el => el === el.toUpperCase() ? 1 : 0)
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split('')
  let array = message.toLowerCase().split('').map(el => {
    if (alphabet.includes(el)){
      let pos = alphabet.indexOf(el)
      return (pos + 13 >= 26) ? alphabet[pos + 13 - 26] : alphabet[pos + 13]
      } else return el
    })
  array = array.map((el, i) => capitals[i] ? el.toUpperCase() : el)
  return array.join('')
}
