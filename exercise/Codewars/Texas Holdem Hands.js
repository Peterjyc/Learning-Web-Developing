function hand(holeCards, communityCards) {
    const array = (holeCards +","+ communityCards).split(",")
    let flush = false;
    let straight = false;
    function checkFlush() {
      let s = 0,d = 0,c = 0,h = 0;
      for(let i = 0; i < array.length; i++){
        let str = array[i].split("")
        if(str.includes('♠')) s++;
        if(str.includes('♦')) d++;
        if(str.includes('♣')) c++;
        if(str.includes('♥')) h++;
      }
      if (s >= 5 || h >= 5 ||c >= 5 ||h >= 5) flush = true
      console.log("flush: " + flush)
    }
      let stArray = array.map(el => {
        return el.split("")[0]
      })
      //convert picture cards to numbers
      for (let i = 0; i < stArray.length; i++){
        if (stArray[i] == "J"){
          stArray.splice(i, 1, "11")
        }else if (stArray[i] == "Q"){
          stArray.splice(i, 1, "12")
        }else if (stArray[i] == "K"){
          stArray.splice(i, 1, "13")
        }else if (stArray[i] == "A"){
          stArray.splice(i, 1, "14")
        }else if (stArray[i] == "1"){
          stArray.splice(i, 1, "10")
        }
      }
      stArray.sort()
      stArray = stArray.map(x => Number(x))
    function checkStraight(){
  //     console.log("stArray: " + stArray)
      for (let i = 0; i < 4; i++){
        let num = Number(stArray[i])
        if (i == 3) num = Number(stArray[stArray.length-1]);
        let subset = [num, num+1, num+2, num+3, num+4]
  //       console.log(subset)
        let checkSubset = (parent, child) => {
          return child.every((el) => {
            return parent.includes(el)
          })
        }
        if(checkSubset(stArray, subset)) straight = true;
      }
      console.log("straight: " + straight)
    }
    function checkTrips() {

    }

    checkFlush()
    checkStraight()


    return {type:"TODO", ranks: []};
  }
