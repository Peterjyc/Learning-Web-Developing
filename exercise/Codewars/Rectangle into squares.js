function sqInRect(lng, wdth){
    if (lng == wdth) return null;
    console.log(lng, wdth)
    let array = []
    while (lng >= 1 && wdth >= 1){
      if (lng > wdth){
        array.push(wdth)
        lng -= wdth;
      } else if (wdth > lng){
        array.push(lng)
        wdth -= lng;
      } else if (wdth == lng){
        array.push(wdth)
        wdth = 0;
        lng = 0
      }
    }
      return array;
  }
