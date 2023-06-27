function solution(string) {
    let array = string.split('')
    let result = ''
    for (let i = 0; i < string.length; i++){
      array[i] !== array[i].toUpperCase() ? result += array[i] : result += " " + array[i]
    }
    return result
  }
