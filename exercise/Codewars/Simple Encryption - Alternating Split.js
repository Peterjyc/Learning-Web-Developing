 function encrypt(text, n) {
  if (n == 0 || text == ('' || null)) return text
  let string = text
  for (let i = 0; i < n; i++){
    let odd = string.split('').filter((n, i) => i%2==0)
    let even = string.split('').filter((n, i) => i%2==1)
    string = even.join('') + odd.join('')
  }
  return string
}

function decrypt(encryptedText, n) {
  if (n == 0 || encryptedText == ('' || null)) return encryptedText
  let string = encryptedText
  for (let i = 0; i < n; i++){
    let firstHalf = string.split('').slice(0,Math.floor(encryptedText.length/2))
    let secondHalf = string.split('').slice(Math.floor(encryptedText.length/2))
    let array = []
    while (firstHalf.length > 0 || secondHalf.length > 0){
      if (secondHalf.length > 0) array.push(secondHalf.shift())
      if (firstHalf.length > 0) array.push(firstHalf.shift())
    }
    string = array.join('')
  } return string
}
