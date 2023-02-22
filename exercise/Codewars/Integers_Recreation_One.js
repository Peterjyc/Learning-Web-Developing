function listSquared(m, n) {
    let array = [];
    let returnArray = [];
    //iterate through all integers between m and n

    for (let i = m; i < n; i++){
      //loop through to find divisors
      for (let j = 0; j <= i / 2; j++){
        if (i % j == 0) {
          if (array.includes(j) || j == i/j) break;
          array.push(j, i / j)
          }
      }
      if(array.length !== 0 || i === 1){
        if (i === 1) array.push(1)
        let reduced = array.reduce((acc, c) => acc + c**2)
        if (Math.sqrt(reduced)%1===0){
          let tempArr = [i, reduced];
          returnArray.push(tempArr)
        }
        }
      array = [];
    }
    return returnArray;
  }
