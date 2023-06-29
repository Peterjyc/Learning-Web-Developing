function toWeirdCase(string){
  let array = string.split(' ').map((letter) => {
    let temp = letter.split('')
    for (let i = 0; i < temp.length; i++){
      if (i % 2 == 0) temp[i] = letter[i].toUpperCase()
      else if (i % 2 == 1) temp[i] = letter[i].toLowerCase()
    } return temp.join('')
    
  })
  return array.join(' ')
}
