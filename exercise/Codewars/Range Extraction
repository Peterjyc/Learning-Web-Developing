function solution(list){
  //loop through each num to check if they have consecutive values
  let result = String(list[0]);
  let count = 1;
  for (let i = 1; i < list.length; i++){
    //create ranges that have consecutive values
    let currentVal = list[i];
    let temp = list[i-1];
      console.log("currentVal: " + currentVal)
      console.log("temp: " + (temp))
      console.log("temp + 1: " + (temp+1))
      console.log("count: " + count)

    if (i !== list.length-1){
      if (temp + 1 !== currentVal){
        if (count >= 3) {
          result = result.concat("-", temp);
        }else if (count == 2){
          result = result.concat(",", temp);
        }

        result = result.concat(",", currentVal);
        count = 1;
        }else count++;
        console.log(result)
      }else {
        let temp2 = list[i - 2];

        console.log("temp2: " + temp2)

        if (temp + 1 == currentVal) count++;

        if (count >= 3){
          if (temp + 1 == currentVal){
            result = result.concat("-", currentVal)
            }
          else {
            result = result.concat("-", temp)
            result = result.concat(",", currentVal)
          }
          }
          else{
          if (count == 2){
            if (temp + 1 !== currentVal){
          result = result.concat(",", temp)
            }
            }
            result = result.concat(",", currentVal)
          }
          }
        console.log(result)

      console.log("count: " + count)

    }
  return result;
}
