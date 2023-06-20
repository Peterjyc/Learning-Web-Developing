function fakeBin(x){
    return x.split('').map(num => {
      if (num < 5) return 0;
      else if (num >= 5) return 1
    }).join('')
  }
