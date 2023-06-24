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

//re-do
function solution(number){
  //ex)number = 15; 3x (3,6,9,12,15), 5x (5,10,15)
  //result = 3+6+9+12+15+5+10 = 60
  let sum = 0;
  for (let i = 0; i < number; i++){
    if(i % 3 === 0 || i % 5 === 0){
      sum += i;
    }
  }
  return sum;
}
