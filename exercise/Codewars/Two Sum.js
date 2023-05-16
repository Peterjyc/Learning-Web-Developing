function twoSum(numbers, target) {
    const array = [];

    for (let i = 0; i < numbers.length; i++){
      let remNum = target - numbers[i]
      if (array.includes(remNum)){
        if (remNum == numbers[i]){
          return [numbers.indexOf(remNum), numbers.indexOf(numbers[i]) + 1]
        }else{
          return [numbers.indexOf(remNum), numbers.indexOf(numbers[i])]
        }
      }else {
        array.push(numbers[i])
      }
    }
  }
