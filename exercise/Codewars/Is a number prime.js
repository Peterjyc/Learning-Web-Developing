function isPrime(num) {
    if (num <= 1) return false
    if (num == 2) return true;
    let status = true;
    for (let i = 2; i <= Math.sqrt(num)+1; i++){
      if (num % i == 0) status = false
      if (!status) break
    }
    return status;
  }
