function highestBiPrimeFac(p1, p2, n) {
  let k1,k2,maxNum = 0;
  for (let i = n; i > 1; i--){
    let num = i;
    k1 = 0;
    k2 = 0;
    maxNum = 0;
    while (num >= 1){
        if (num % p1 === 0){
          k1++;
          num = num / p1;
        }
        
        if (num % p2 === 0){
          k2++;
          num = num / p2;
        }
        
        if (num % p1 !== 0 && num % p2 !== 0) break;
    }
    if (num === 1) {
      maxNum = i;
      }
    if (maxNum > 1 && k1 > 0 && k2 > 0){
    return [maxNum, k1, k2]
    }
  }
}
