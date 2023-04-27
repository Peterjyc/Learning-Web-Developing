decodeMorse = function(morseCode){
  let code = morseCode.split("   ")
  
  let text = code.map(str => str.trim().split(" "))
  for (let i = 0; i < text.length; i++){
    text[i] = text[i].map(str => MORSE_CODE[str]).join('')
  }
  return text.join(' ').trim()
}
