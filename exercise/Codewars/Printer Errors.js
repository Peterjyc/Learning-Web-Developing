function printerError(s) {
    let arr = s.split("")
    let err = (s.match(/[n-z]/gi)) ? s.match(/[n-z]/gi) : 0
    return `${err.length || 0}/${arr.length}`
  }
