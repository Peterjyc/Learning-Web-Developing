function productFib(prod){
  let next, n1 = 0, n2 = 1, i = 0;
  while (i < prod) {
    next = n1 + n2;
    n1 = n2;
    n2 = next;
    i = n1*n2
  }
  return ([n1, n2, (i === prod)])
}
