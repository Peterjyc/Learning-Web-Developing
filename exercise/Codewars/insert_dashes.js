function insertDash(num) {
   let arr = String(num).split('')
   let newArr = [];
   for (let i = 1; i < arr.length; i++){
     let temp = arr[i-1];
     newArr.push(temp)
     let temp1 = arr[i]
     if (temp % 2 === 1 && temp1 % 2 === 1){
       newArr.push("-")
     }
   }
  newArr.push(arr[arr.length-1])
  return newArr.join('')
}
