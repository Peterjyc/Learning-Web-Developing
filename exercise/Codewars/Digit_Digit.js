function squareDigits(num){
    let array = String(num).split("").map(x => x**2).join("");
    return Number(array);

  }
