function solution(input, markers) {
    let array = input.split("\n");
    console.log(array)
    console.log(markers)
    let result = [];
    let count = 0;
    for (let x of array){
      count++;
      console.log("x : " + x)
      for (let char of x){
        console.log("char : " + char)
        console.log(markers.includes(char))
        if (markers.includes(char)) {
          break;
        }else {
          result += char;
          }

      }
      result = result.trim();
      console.log("trimmed: "+ result)
      if (count == array.length) break;
      result += "\n"
    }
    return result;
  };
