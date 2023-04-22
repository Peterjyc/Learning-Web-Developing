function bouncingBall(h,  bounce,  window) {
    if (h <= 0 || bounce >= 1 || bounce <= 0 || window >= h) return -1;
    let count = 1;
    while (h >= window){
      h *= bounce;
      if (h > window){
        count += 2
      }
    }
    return count;
  }
