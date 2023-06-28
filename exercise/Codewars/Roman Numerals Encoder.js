function solution(number){
  const romanNums = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  
  let str = ''
  let result = numbers.map((num, i) => {
    while(number >= num){
      str += romanNums[i]
      number -= num
    }
  })
  return str
}
