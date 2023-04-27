function score( dice ) {
  console.log(dice)
  let counts = {};
  let score = 0;
  dice.forEach((x) => { counts[x] = (counts[x] || 0) + 1; });
  console.log(counts)
  while (counts[1] > 0 || counts[5] > 0 || counts[2] >= 3 || counts[3] >= 3 ||counts[4] >= 3 ||counts[6] >= 3){
    for (let i = 1; i <= 6; i++){
      if (counts[i] >= 3) {
        score += i * 100;
        counts[i] -= 3;
        if (i == 1) score+= 900
      }
      if (counts[i] < 3 && counts[i] > 0){
        if (i == 1){
          score += 100
          counts[i] -= 1
        }
        if (i == 5){
          score += 50
          counts[i] -= 1
        }
      }
    }
  }
  console.log(counts, score)
  return score
} 
