function goodVsEvil(good, evil){
    let goodScore = [1, 2, 3, 3, 4, 10], evilScore = [1, 2, 2, 2, 3, 5, 10]
    let goodSum = 0, evilSum = 0
    let goodArr = good.split(' '), evilArr = evil.split(' ')
    goodArr.forEach((person, i) => {
      goodSum += goodScore[i] * person
    })
    evilArr.forEach((person, i) => {
      evilSum += evilScore[i] * person
    })
    return `Battle Result: ${goodSum > evilSum ? 'Good triumphs over Evil' : goodSum < evilSum ? 'Evil eradicates all trace of Good' : 'No victor on this battle field'}`
  }
