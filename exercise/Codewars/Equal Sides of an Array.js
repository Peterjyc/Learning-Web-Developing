function findEvenIndex(arr)
{
  if (arr.length == 0) return -1
  let sum = 0;
  let leftSum = 0;
  sum = arr.reduce((a,c) => a + c)
  for (let i = 0; i < arr.length; i++){
    sum -= arr[i]

    if (leftSum == sum) return i

    leftSum += arr[i]
    }
  return -1
}
