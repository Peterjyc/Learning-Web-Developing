var number=function(array){
    let outputArray = []
    for (let i = 1; i <= array.length; i++){
      outputArray.push(`${i}: ${array[i-1]}`)
    }
    return outputArray
  }
