var findDigit = function(num, nth){
    //     If num is negative, ignore its sign and treat it as a positive value
      let posNum = Math.abs(num);
    //   If nth is not positive, return -1
      if (nth < 1) return -1;
    // convert number to array
      let arr = String(posNum).split("").reverse();
      if (nth > arr.length) return 0;
      return Number(arr[nth-1]);
    }
