let operator;


function add(firstNumber, secondNumber) {
alert(firstNumber+secondNumber);    
}

function subtract(firstNumber, secondNumber) {
alert(firstNumber-secondNumber);    
}

function multiply(firstNumber, secondNumber) {
alert(firstNumber*secondNumber);    
}

function divide(firstNumber, secondNumber) {
alert(firstNumber/secondNumber); 
}

function operate() {

const numberOne = parseInt(document.querySelector("#firstNumber").value);
const numberTwo = parseInt(document.querySelector("#secondNumber").value);
const operator = document.querySelector('#operator').value

if (operator == "+") {
return add(numberOne, numberTwo);    
}
else if (operator == "-") {
return subtract(numberOne, numberTwo)
}
else if (operator == "*") {
return multiply(numberOne, numberTwo)
}
else if (operator == "/") {
return divide(numberOne, numberTwo)    
}
}