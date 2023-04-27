function spinWords(string){
  let array = string.split(" ")
  let resultArr = [];
  
  for (let i = 0; i < array.length; i++){
    if (array[i].length >= 5){
      let tempArr = array[i].split('')
      resultArr.push(tempArr.reverse().join(''))
    } else {
      resultArr.push(array[i])
    }
  }
  return resultArr.join(" ")
}
