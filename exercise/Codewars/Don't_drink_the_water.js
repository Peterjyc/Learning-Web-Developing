function separateLiquids(glass) {
    const density = {
      H : 1.36,
      W : 1.00,
      A : 0.87,
      O : 0.80
    }
    let glassCombined = glass.join(',').split(',')
    const liquidCount = glass.length;
    let glassCombinedValues = glassCombined.map(liquid => density[liquid]).sort()
    let liquidSorted = glassCombinedValues.map((liquid) => {
      let index = Object.values(density).indexOf(liquid);
      return Object.keys(density)[index];
    });

  //   console.log(glassCombined, density, glass.length, glassCombinedValues, liquidSorted)

    let result = glass.map((innerArray) => {
      return innerArray.map((_, index) => liquidSorted.shift());
    });
    return result;

  }
