function multiplyNumeric(obj){
  for (let key in obj){
    if (Number.isInteger(obj[key])){
      let temp = obj[key] * 2;
      obj[key] = temp;
    }
  }
}

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

console.log(menu);
multiplyNumeric(menu);
console.log(menu);

// after the call
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
