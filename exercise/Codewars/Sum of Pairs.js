function sumPairs(ints, s) {
  let set = {}
  for (let i = 0; i < ints.length; i++){
    if (Object.hasOwn(set, s - ints[i])) return [s-ints[i], ints[i]];
    set[ints[i]] = true
  }
  return undefined;
}
