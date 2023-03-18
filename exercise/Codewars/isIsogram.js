function isIsogram(str){
  let string = str.toLowerCase().split("");
  for (let i = 0; i < string.length; i++){
    let char = string[i]
    if (string.indexOf(char) !== i) return false;
  }
  return true;
}
