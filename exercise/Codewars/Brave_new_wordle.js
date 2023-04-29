function resolver(guess, solution){
    let result = [];
    let array = guess.split("");
    let solutionArray = solution.split("")
    let guessCount = {};
    let solutionCount = {};
    let correctCount = {};

    for (let i = 0; i < 5; i++){
      let letter = array[i];
      if (!guessCount[letter]){
        console.log('true')
        guessCount[letter] = 1;
      }else{
        console.log('false')
        guessCount[letter]++;
      }
      letter = solutionArray[i]
      if (!solutionCount[letter]){
        solutionCount[letter] = 1;
      }else{
        solutionCount[letter]++;
      }

      if (array[i] === solutionArray[i]) {
        if (!correctCount[array[i]]){
        correctCount[array[i]] = 1;
        } else correctCount[array[i]]++;
      }
    }
    console.log(guessCount, solutionCount, correctCount)

    for (let i = 0; i < 5; i++){
      let letter = array[i];
      if (letter === solutionArray[i]){
        result.push('g')
        solutionCount[letter]--;
        guessCount[letter]--;
        correctCount[letter]--;
      }else if (guessCount[letter] > 0 && solutionCount[letter] > 0){
        if (correctCount[letter] == solutionCount[letter]){
          result.push('b')
        }else result.push('y')
        solutionCount[letter]--;
        guessCount[letter]--;
      } else {
        guessCount[letter]--;
        result.push('b')
      }
    }
    return result.join('')
  }
