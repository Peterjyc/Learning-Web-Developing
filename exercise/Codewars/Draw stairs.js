function drawStairs(n) {
    let string = '';
    for (let i = 0; i < n; i++){
      let output = ``
      output += `${" ".repeat(i)}I`
      if (i !== (n - 1)) output += '\n'
      string += output
    }
    return string
  }
