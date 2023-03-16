function reverseWords(str) {
  let string = str.split(" ")
  return string.map(word => word.split("").reverse().join("")).join(" ")
}
