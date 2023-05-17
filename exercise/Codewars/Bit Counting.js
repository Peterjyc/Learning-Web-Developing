var countBits = function(n) {
    const bit = n.toString(2).split("")
    let count = 0;
    for (let i = 0; i < bit.length; i++){
      if (bit[i] == 1) count++;
    }
    return count;
  };
