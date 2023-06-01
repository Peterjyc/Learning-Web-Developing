var number = function(busStops){
  let pplIn = 0;
  let pplOut = 0;
  for (let i = 0; i < busStops.length; i++){
    pplIn += busStops[i][0]
    pplOut += busStops[i][1]
  }
  return pplIn - pplOut
}
