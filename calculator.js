// Calculator functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            return 'ERROR';
    }
}

// Calculator variables
let num1;
let num2;
let operator;
let displayVal = '';

// Display functions
function addToDisplay(e) {
    console.log(e);
    console.log(e.target.innerText);
}

const displayButtons = document.querySelectorAll('.number, .operator');
console.log(displayButtons);
displayButtons.forEach(button => button.addEventListener('click', addToDisplay));