function doubleChar(str) {
    return str.split('').map(el => String(el)+String(el)).join('')
  }
