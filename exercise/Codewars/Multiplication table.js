multiplicationTable = function(size) {
    let array = [];
    for (let i = 1; i <= size; i++){
      let tempArr = [];
      for (let j = 1; j <= size; j++){
        tempArr.push(j * i)
      }
      array.push(tempArr)
    }
    return array
  }
