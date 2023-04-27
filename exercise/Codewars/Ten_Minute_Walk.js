function isValidWalk(walk) {
  let n = 0;
  let s = 0;
  let e = 0;
  let w = 0;
  let count = 0;
  for (let i = 0; i < walk.length; i++){
    if (walk[i] == 'n'){
      (s > 0) ? s-- : n++;
    }else if (walk[i] == 's'){
      (n > 0) ? n-- : s++;
    }else if (walk[i] == 'e'){
      (w > 0) ? w-- : e++;
    }else if (walk[i] == 'w'){
      (e > 0) ? e-- : w++;
    } count++;
  }
  return (count == 10 && n+s+e+w == 0)
}
