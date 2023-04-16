function abbrevName(name){
  let array = name.split(" ");
  return `${array[0][0].toUpperCase()}.${array[1][0].toUpperCase()}`
}
