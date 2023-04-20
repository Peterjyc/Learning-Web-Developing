function comp(array1, array2){
  if (array1 == null || array2 == null) return false;
  let array1squared = array1.map(x => x**2).sort((a,b) => a - b);
  array2.sort((a,b) => a - b)
  for (let i = 0; i < array1squared.length; i++){
    if (array1squared[i] !== array2[i]) return false;
  }
  return true;
}
