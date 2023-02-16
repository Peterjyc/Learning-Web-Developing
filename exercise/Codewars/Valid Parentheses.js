function validParentheses(parens) {
    let len = parens.length;
    let arr = parens.split("");
    let check = 0;

    console.log(len, arr);
    for (let i = 0; i < len; i++){
      let temp = arr.shift();
      if (temp == `(`) check++;
      else if (temp == `)`) check--;
      console.log(temp);
      if (check < 0) return false;
    }
    if (check === 0) return true;
    else return false;
  }
