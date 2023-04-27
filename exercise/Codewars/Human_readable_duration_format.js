function formatDuration (time) {
  //If zero return now
  if(time == 0) return 'now';
  let remainder = time
  
  //conversion unit setup
  let yearSec = 60*60*24*365
  let daySec = 60*60*24
  let hourSec = 3600;
  let minuteSec = 60
  //unit setup
  let years = 0
  let days = 0
  let hours = 0
  let minutes = 0
  let seconds = 0
  let array = [];
  let string = '';
  
  //calculation
  function calc(interval, variable){
    if (remainder >= interval){
      variable = Math.floor(remainder/interval)
      remainder = remainder % interval
      return variable;
    }
  }
  
  //calculate each unit
  years = calc(yearSec, years)
  days = calc(daySec, days)
  hours = calc(hourSec, hours)
  minutes = calc(minuteSec, minutes)
  seconds = remainder
  //generate corresponding unit text
  if (years > 0) {
    if (years > 2){
      string = years + ' years'
    }
    else{
      string = years + ' year'
    }
    array.push(string)
  }
  
  if (days > 0) {
    if (days >= 2){
      string = days + ' days'
    }
    else{
      string = days + ' day'
    }
    array.push(string)
  }
  
  if (hours > 0) {
    if (hours >= 2){
      string = hours + ' hours'
    }
    else{
      string = hours + ' hour'
    }
    array.push(string)
  }
  
  if (minutes > 0) {
    if (minutes >= 2){
      string = minutes + ' minutes'
    }
    else{
      string = minutes + ' minute'
    }
    array.push(string)
  }
  
  if (seconds > 0) {
    if (seconds >= 2){
      string = seconds + ' seconds'
    }
    else{
      string = seconds + ' second'
    }
    array.push(string)
  }
  
  //Add "and"
  
  if (array.length >= 2){
    if (array.length >= 3){
    for (let i = 0; i < array.length-2; i++){
      array[i] = array[i].concat(",")
      }
    }
    array.splice(array.length-1, 0, "and")
    }
  return array.join(" ")
}
