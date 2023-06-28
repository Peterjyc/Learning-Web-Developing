function diamond(n){
  let array = []
  if (n % 2 == 0 || n <= 0) return null;
  for(let i = 1; i <= Math.ceil(n/2); i++){
    let tempStr = ' '.repeat(Math.ceil((n-1)/2)-i+1)
    tempStr += '*'.repeat((i*2)-1)
    tempStr += '\n'
    array.push(tempStr) 
  }
  for(let i = Math.floor(n/2); i > 0 ; i--){
    array.push(array[i-1])
  }
  
  return array.join('')
}
