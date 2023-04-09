class SmallestIntegerFinder {
    findSmallestInt(args) {
      let curr = args[0]
      for (let i = 1; i < args.length; i++){
        if (curr > args[i]){
          curr = args[i]
        }
      }
      return curr;
    }
  }
