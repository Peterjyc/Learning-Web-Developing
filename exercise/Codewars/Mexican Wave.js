function wave(str){
  let array = []
  for (let i = 0; i < str.length; i++){
    let string = str.split('')
    if (string[i] !== ' '){
      string[i] = string[i].toUpperCase();
      array.push(string.join(''))
    }
  }
  return array
}
