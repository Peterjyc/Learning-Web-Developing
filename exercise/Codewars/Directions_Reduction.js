function dirReduc(arr){
  let i = 1;
  while (i < arr.length) {
    switch(arr[i]){
        case 'NORTH':
          if (arr[i-1] == 'SOUTH'){
            arr.splice(i-1, 2)
            i -= 2;
          } else i++;
          break;
        case 'SOUTH':
          if (arr[i-1] == 'NORTH'){
            arr.splice(i-1, 2)
            i -= 2;
          } else i++;
          break;
        case 'EAST':
          if (arr[i-1] == 'WEST'){
            arr.splice(i-1, 2)
            i -= 2;
          } else i++;
          break;

        case 'WEST':
          if (arr[i-1] == 'EAST'){
            arr.splice(i-1, 2)
            i -= 2;
          } else i++;
          break;
        
        default:
          i++;
          break;
    }
  }
    return arr;
}
