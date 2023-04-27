function duplicateCount(text){
  if (text == '') return 0
  let count = 0
  let array = text.toLowerCase().split('')
  let property = {};
  console.log('array ' + array)
  array.map(str => {
    if (!property.hasOwnProperty(str)){
      property[str] = 1;
      console.log('prop: ' + property[str])
    } else {
      if (property[str] === 1){
        count++;
        console.log('count: ' + count)
        property[str] = 2;
      }
    }
  })
  return count;
}
