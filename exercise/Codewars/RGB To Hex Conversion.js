function rgb(r, g, b){
  let array = [r, g, b]
  array = array.map(el => (el <= 255) ? el : 255).map(el => (el < 0) ? 0 : el).map(el => el.toString(16).toUpperCase()).map(el => (el.split("")[1]) ? el : '0'+String(el))
  return array.join('')
}
