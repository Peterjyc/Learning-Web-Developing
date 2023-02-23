function pickPeaks(arr){
  console.log(arr)
  let pos = []
  let peaks = []
  let temp, curr, next, count = 0;
  for (let i = 1; i < arr.length; i++){
    console.log(`i ${i}`)
    temp = arr[i - 1];
    curr = arr[i];
    next = arr[i+1]
    console.log(`temp ${temp} curr ${curr} next ${next}`)
    
    if (temp < curr && curr > next ){
      pos.push(i)
      peaks.push(arr[i])
      console.log(`pos ${pos} peaks ${peaks}`)
    }
    
    if (temp <= curr && curr === next){
      count ++;
      console.log(`count is ${count}`)
      break;
  }
    if (temp <=curr && curr > next && count > 0){
      pos.push(i-count)
      peaks.push(arr[i-count])
      count = 0;
    }
    
    if (temp <= curr && curr < next && count > 0){
      count = 0;
    }
  }
    console.log(pos, peaks)
    return {pos:pos,peaks:peaks}

  }
