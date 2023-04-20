function duplicateEncode(word){
    let returnArray = [];
    //split word into characters
    let chars = word.toLowerCase().split("")
    //loop through characters
    for (let i = 0; i < chars.length; i++){
      let char = el => el === chars[i]
      //check if each character has a duplicate, then push to array
      if (chars.findIndex(char) == chars.findLastIndex(char)) {
          returnArray.push('(')
        } else {
          returnArray.push(')')
        }
    }
  //return array
  return returnArray.join("");
}
