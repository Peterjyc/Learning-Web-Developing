function toCamelCase(str){
  if (str == 0) return '';
  let string = str.split(/-|_/);
  let returnString = [string[0]];
  for (let i = 1; i < string.length; i++){
    returnString.push(string[i][0].toUpperCase() + string[i].substring(1))
  }
  return returnString.join('')
}
