// Return the output array, and ignore all non-op characters
function parse( data )
{
  let num = 0;
  let array = data.split('')
  let result = []
  for (let i = 0; i < array.length; i++){
    if (array[i] == 'i'){
      num++
    } else if (array[i] == 'd'){
      num--
    }else if (array[i] == 's'){
      num = num**2
    }else if (array[i] == 'o'){
      result.push(num)
    }
  }
  return result
}
