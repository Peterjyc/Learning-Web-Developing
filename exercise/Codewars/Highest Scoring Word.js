function high(x){
  let array = x.split("").map(el => el.charCodeAt()-96)
  let words = x.split(" ")
  let output = []
  let tempArray = []
  for (let i = 0; i < array.length; i++){
    if (array[i] !== -64) {
      tempArray.push(array[i])
    }else{
      output.push(tempArray.reduce((a,c) => a + c))
      tempArray=[]
    }
    if (i == array.length - 1){
      output.push(tempArray.reduce((a,c) => a + c))
    }
  }
  return (words[output.indexOf(Math.max(...output))])
}
