function getLastDigit(index) {
    let a = 0;
    let b = 1;
    let c;

    for (let i = 2; i <= index; i++){
      c = (a + b) % 10;
      a = b;
      b = c;
    }
    return c;
  }
