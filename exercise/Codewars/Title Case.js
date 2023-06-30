function titleCase(title, minorWords) {
    if (title=='') return ''
    let exception = minorWords ? minorWords.toLowerCase().split(' ') : []
    let array = title.split(' ').map((word,index) => {
      if (exception.includes(word.toLowerCase()) && index !== 0 && minorWords !== undefined){
        return word.toLowerCase()
      } else {
        let chars = word.toLowerCase().split('')
        return word[0].toUpperCase() + chars.slice(1).join('')
      }
    })
    return array.join(' ')
  }
