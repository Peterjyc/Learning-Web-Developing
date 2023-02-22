var isPP = function(n){
    let num = n;
    let X = null;
    let Y = null;
    for (let i = 2; i <= 100; i++){
      let result = Math.pow(n, 1/i);
      if (Math.round(result)**i == n){
        X = Math.round(result);
        Y = i;
      }
    }
    if (X !== null) return ([X, Y]);
    else return null;
  }
