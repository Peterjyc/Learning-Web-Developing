function gap(g, m, n) {
  let prime1 = 0, prime2 = 0, count = 0, result = [], primes = []
  //iterate from m to n to check for primes
  for (let i = (m%2== 0 ? m+1 : m) ; i < n; i = i + 2){
    if (checkPrime(i)) {
      prime2 = prime1
      prime1 = i
    }
    if (prime1 - prime2 == g) {
      result = [prime2, prime1]
      break;
      } else if (prime1 !== 0){
        prime2 = prime1
      }
  }
  if (result.length !== 2) return null;
  else return result
}

function checkPrime(num){
  let result = true;
  if (num % 2 == 0) result = false
  for (let i = 3; i < num; i = i + 2){
    if (num % i == 0) result = false
  }
  return result
}
