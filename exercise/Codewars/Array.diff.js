function arrayDiff(a, b) {
    let array = [];
    for (let i = 0; i < a.length; i++){
    if(!b.includes(a[i])){
      array.push(a[i])
      }
    }
    return array;
  }
