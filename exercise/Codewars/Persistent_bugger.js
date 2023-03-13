function persistence(num) {
    let count = 0;
    while (num.toString().length > 1){
    num = num.toString().split('').reduce((a, c) => a *= c)
      count++;
      }
    return count;
  }
