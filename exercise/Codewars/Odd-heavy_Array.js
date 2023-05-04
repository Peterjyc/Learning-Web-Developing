function isOddHeavy(n){
  let oddArray = n.filter(x => x % 2 !== 0).sort()
  let evenArray = n.filter(x => x % 2 == 0).sort()
  if (oddArray.length == 0) return false;
  if (evenArray.length == 0) return true;
  let minOddNum = oddArray[0]
  let maxEvenNum = evenArray.slice(-1)[0]
  if (minOddNum > maxEvenNum){
    return true;
  }else return false;
  
}
