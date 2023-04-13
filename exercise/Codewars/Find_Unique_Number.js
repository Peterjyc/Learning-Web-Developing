function findUniq(arr) {
    let repeated = arr.filter((item, pos) => {
      return (arr.indexOf(item)!==pos)
    })
    return arr.filter((item) =>{
      return item !== repeated[0]
    })[0]
  }
