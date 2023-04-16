function solution(str, ending){
  let string = str.slice((str.length-ending.length), str.length)
  return (string == ending)
}
