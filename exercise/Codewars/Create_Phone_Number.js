function createPhoneNumber(numbers){
  let areacode = numbers.slice(0, 3).join('')
  let phoneNum = numbers.slice(3, 6). join('')
  let phoneNum2 = numbers.slice(6,10).join('')
  return `(${areacode}) ${phoneNum}-${phoneNum2}`
}
