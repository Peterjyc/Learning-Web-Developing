function XO(str) {
    let o, x;
    const array = str.toLowerCase().split("")
    o = array.filter(el => el == "o")
    x = array.filter(el => el == "x")
    return (o.length == x.length)
  }
