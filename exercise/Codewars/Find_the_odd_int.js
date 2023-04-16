function findOdd(A) {
  let array = A.sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < array.length; i++){
    for (let j = 0; j < array.length; j++){
      if (array[i] == array[j]) count++;
    }
    if (count % 2 !== 0) return array[i]
  }
}
