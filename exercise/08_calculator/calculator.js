const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++){
    sum += array[i];
  }
  return sum;
};

const multiply = function(array) {
    let sum = 1;
  for (let i = 0; i < array.length; i++){
    sum *= array[i];
  }
  return sum;
};

const power = function(x,y) {
  let value = 1;
  for (let i = 0; i < y; i++){
    value *= x;
  }
  return value;
};

const factorial = function(num) {
  // let counter = num;
  let sum = 1
  while (num > 1){
    sum *= num;
    num--;
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
