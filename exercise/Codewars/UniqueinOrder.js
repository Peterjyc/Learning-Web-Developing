var uniqueInOrder=function(iterable){
    let arr = iterable;
    if (typeof(iterable) == 'string'){
      let arr = iterable.split('')
    }

    if (arr.length < 1) return [];

    let prev = arr[0]
    let result = [prev]
    for (let i = 1; i < arr.length; i++){
      let curr = arr[i];
      if (curr !== prev) {
        result.push(curr)
      }
      prev = curr;
    }
    return result
  }
