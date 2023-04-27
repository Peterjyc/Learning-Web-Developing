function solution(number){
  if (number <= 3) return 0;
  let array = [];
  for (let i = 2; i < number; i++){
    if (i % 3 == 0 || i % 5 == 0){
      array.push(i)
    }
  }
  return array.reduce((a,c) => a + c)
}
