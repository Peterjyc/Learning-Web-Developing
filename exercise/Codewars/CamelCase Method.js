String.prototype.camelCase=function(){
  if (this == '') return ''
  let array = this.split(" ")
  for (let i = 0; i < array.length; i++){
    array[i] = array[i][0].toUpperCase() + array[i].slice(1)
  }
  return array.join('')
}
