function points(games) {
  let scoreSum = 0;
  for (let i = 0; i < games.length; i++){
    let myScore = games[i][0]
    let oppScore = games[i][2]
    myScore > oppScore ? scoreSum += 3 :
    oppScore == myScore ? scoreSum += 1 : null
  }
  return scoreSum
}
