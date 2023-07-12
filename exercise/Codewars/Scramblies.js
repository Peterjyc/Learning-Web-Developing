function scramble(str1, str2) {
  let arr1 = str1.split('')
  let arr2 = str2.split('')
  let array = arr1.reduce((a, e) => { a[e] = a[e] ? a[e] + 1 : 1; return a }, {}); 
  let array2 = arr2.reduce((a, e) => { a[e] = a[e] ? a[e] + 1 : 1; return a }, {}); 
  return arr2.every(char => {
    if (array[char] >= array2[char]){
      return true;
    } else return false;
  })
}
