function orderWeight(strng) {
  let array = strng.split(' ').map(num => {
      return {
        val: num,
        key: num.split('').reduce((a,c)=>parseInt(a)+parseInt(c), 0)
        }
    })
    .sort((a,b) => {
      return a.key == b.key ? a.val.localeCompare(b.val) : a.key - b.key
    })
    .map(num => num.val)
  return array.join(' ')
}
