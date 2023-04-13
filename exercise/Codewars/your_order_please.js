function order(words){
  let array = words.split(" ");
  let returnArray = [];
  for (let i = 1; i <= array.length; i++) {
    for(let j = 0; j < array.length; j++){
      if (array[j].includes(i)){
        returnArray.push(array[j])
        break;
      }
    }
  }
  return returnArray.join(" ");
}
