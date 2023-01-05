/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable no-loop-func */
/* eslint-disable linebreak-style */
/* eslint-disable no-restricted-syntax */
/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */
/* eslint-disable linebreak-style */
/* eslint-disable default-case */
/* eslint-disable func-names */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
// basic functions//
function add(num1, num2) {
  return (num1 + num2);
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 === 0) {
    return 'Cannot divide by 0';
  }
  return num1 / num2;
}

// operating function
function operate(num1, num2, op) {
  switch (op) {
    case '+':
      return add(num1, num2);
    case '-':
      return subtract(num1, num2);
    case '*':
      return multiply(num1, num2);
    case '/':
      return divide(num1, num2);
  }
}
// loop through buttons to add corresponding function
const buttons = document.querySelectorAll('.button');
const screen = document.querySelector('.screen');

let temp = 0;
let firstNum = 0;
let secondNum = 0;
let next = false;
let operator = '';
let opExists = false;
let result = 0;
for (const button of buttons) {
  button.addEventListener('click', function () {
    if (this.classList.contains('num') && next === false) {
      if (screen.innerHTML === '0') {
        // Replace the leading zero with the new digit
        screen.innerHTML = this.id;
        temp = document.getElementById('screen').innerHTML;
      } else {
        // Concatenate the new digit to the current input
        screen.innerHTML += this.id;
        temp = document.getElementById('screen').innerHTML;
      }
    }
    // clear the screen for next number
    if (this.classList.contains('num') && next === true) {
      next = false;
      screen.innerHTML = this.id;
      temp = document.getElementById('screen').innerHTML;
    }

    // store operator
    if (this.classList.contains('op')) {
      next = true;
      if (opExists === false) {
        opExists = true;
        firstNum = parseFloat(temp);
        operator = this.id;
      } else if (opExists === true) {
        // evaluate operation
        secondNum = parseFloat(temp);
        result = operate(firstNum, secondNum, operator);
        firstNum = result;
        screen.innerHTML = firstNum;
        operator = this.id;
      }
    } else {
      next = false;
    }
    if (this.classList.contains('eval')) {
      secondNum = parseFloat(temp);
      result = operate(firstNum, secondNum, operator);
      firstNum = result;
      temp = firstNum;
      screen.innerHTML = firstNum;
      opExists = false;
    }
    if (this.classList.contains('reset')) {
      screen.innerHTML = 0;
      firstNum = 0;
      secondNum = 0;
      operator = '';
      opExists = false;
      temp = 0;
    }
    if (this.classList.contains('inv')) {
      const negativeNum = temp * -1;
      screen.innerHTML = negativeNum;
      temp = negativeNum;
    }
    if (this.classList.contains('percent')) {
      secondNum = parseFloat(temp);
      result = operate(firstNum, secondNum, operator);
      firstNum = result;
      temp = firstNum;
      screen.innerHTML = firstNum * 100;
      screen.innerHTML += '%';
      opExists = false;
    }
    console.log(`Temp ${temp}, first ${firstNum}, second ${secondNum}`);
  });
}
