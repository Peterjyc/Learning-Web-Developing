function maskify(cc) {
    let array = cc.split("")
    console.log(array)
    let output = ""
    for (let i = 0; i < array.length; i++){
      if (i < array.length - 4 && array.length > 4){
        output += "#"
      } else {
        output += String(array[i])
      }
    }
    return output
  }
