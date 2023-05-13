function isTriangle(a,b,c)
{
  let arr = [a,b,c]
  arr.sort((a,b) => a-b)
  return (arr[0]+arr[1] > arr[2]) ? true : false
}
