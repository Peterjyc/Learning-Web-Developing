function DNAStrand(dna){
    let array = dna.split("");
    let result = [];
    for (let i = 0; i < array.length; i++){
      switch (array[i]){
          case "A" : result.push("T");
          break;
          case "T" : result.push("A");
          break;
          case "C" : result.push("G");
          break;
          case "G" : result.push("C");
          break;
      }
    }
    return result.join("")
    }
