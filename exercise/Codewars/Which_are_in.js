function inArray(array1,array2){
    const result = new Set()
    for (let i = 0; i < array2.length; i++){
     let temp = (array1.filter(el => array2[i].includes(el)))
     temp[0] ? result.add(temp[0]) : null
    }
    return Array.from(result).sort()
  }
