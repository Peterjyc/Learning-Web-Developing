const deNico = (key, m) => { 
  let array = key.split('')
  let arraySorted = key.split('').sort()
  let message = m.split('')
  let property = new Set()
  let result = [];
  for (let i = 1; i <= array.length; i++){
      property[arraySorted[i-1]] = i
  }
  console.log(array,arraySorted, message, property)
  
  for (let i = 0; i < message.length; i++){
    console.log('i: ' + i)
    let x = i % key.length
    console.log('x:' + x)
    console.log('property[array[x]]: ' + property[array[x]])
    console.log(message[property[array[x-1]]])
  }
}
