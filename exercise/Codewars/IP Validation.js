function isValidIP(str) {
  let array = str.split(".")
  return (array.length == 4 && array.every(num => num <= 255 && num >= 0 && String(Number(num)) === num))
}
