const reverseSeq = n => {
    let result = [];
    for (let i = 1; i <= n; i++){
      let num = i;
      result.push(num);
    }
    return result.reverse();
  };
