function findNextSquare(sq) {
    cubeRoot = Math.sqrt(sq)
    return (cubeRoot == Math.floor(cubeRoot)) ? Math.pow(cubeRoot+1, 2) : -1
  }
