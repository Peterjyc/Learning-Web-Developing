function expandedForm(num) {
    let array = []
    let str = String(num).split('')
    //get denominations of each digit
    for (let i = 0; i < str.length; i++){
      let denomination = Math.pow(10,str.length-i-1)
      array.push(Number(str[i])*denomination)
    }
    array = array.filter(num => num !== 0)
    return array.join(" + ")
  }
