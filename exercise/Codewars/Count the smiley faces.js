//return the total number of smiling faces in the array
function countSmileys(arr) {
  function checkEyes(num){
    return (arr[num][0] == ":" || arr[num][0] == ";")
  }
  function checkMouth(num){
    return (arr[num][1] == `)` ||
            arr[num][1] == "D" ||
            (arr[num][1] == "-" || arr[num][1] == "~") &&
            (arr[num][2] == ")" ||
            arr[num][2] == "D"))
  }
  let count = 0
  for (let i = 0; i < arr.length; i++){
    if (checkEyes(i) && checkMouth(i)) count++
  }
  return count
}

