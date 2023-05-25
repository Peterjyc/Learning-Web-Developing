function getSum(a, b)
{
  const array = [a, b]
  array.sort((a,b) => a - b)
  let sum = 0;
  for (let i = array[0]; i <= array[1]; i++){
    sum += i
  }
  return sum;
}
