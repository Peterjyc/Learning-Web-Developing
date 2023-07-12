function perimeter(n) {
  if (n <= 1) return 4
  if (n==2) return 8
  let prev = 1
  let prev2 = 1
  let curr = 0;
  let sum = 2;
  for (let i = 3; i <= n + 1; i++){
    curr = prev + prev2;
    sum += curr;
    prev2 = prev;
    prev = curr;
  }
  return sum * 4
}
