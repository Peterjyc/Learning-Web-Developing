//basic functions
function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1*num2;
}

function divide(num1,num2){
    return num1 / num2;
}

//operating function
function operate(num1, num2, operator){
    if (operator === "+"){
        return add(num1, num2);
    }else if (operator === "-"){
        return subtract(num1, num2);
    }else if (operator === "*"){
        return multiply(num1, num2);
    }else if (operator === "/"){
        return divide(num1, num2);
    }
}
//loop through buttons to add corresponding function
const buttons = document.querySelectorAll(".button");
const screen = document.querySelector(".screen");

let firstNum = 0;
let secondNum = 0;
let next = false;
let operator = ""
for (const button of buttons){
    button.addEventListener("click", function() {
        if (this.classList.contains("num") && next === false) {
            if (screen.innerHTML === "0") {
                // Replace the leading zero with the new digit
                screen.innerHTML = this.id;
            } else {
                // Concatenate the new digit to the current input
                screen.innerHTML += this.id;
            }
        }
        if (this.classList.contains("op")) {
            next = true;
            firstNum = document.getElementById('screen').innerHTML;
            operator = this.id;
        }
    });
}
