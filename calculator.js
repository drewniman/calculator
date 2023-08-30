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
const display = document.querySelector('.display');
function addToDisplay(e) {
    displayVal = displayVal.concat(e.target.innerText);
    display.textContent = displayVal;
}

const displayButtons = document.querySelectorAll('.number');
displayButtons.forEach(button => button.addEventListener('click', addToDisplay));

function setOperator(e) {
    // Three cases
    if (!num1 && displayVal === '') {
        // 1. num1 and displayVal empty
        console.log('Case 1');
        return;
    } else if (!num1) {
        // 2. displayVal full, num1 empty
        console.log('Case 2');
        num1 = Number(displayVal);
        operator = e.target.innerText;
        displayVal = '';
    } else {
        // 3. num1 and displayVal full
        console.log('Case 3');
        // Perform operation
        num2 = Number(displayVal);

        // Check for divide by zero
        if (operator === '/' && num2 === 0) {
            alert('Illegal operation');
            clear();
            return;
        }
        
        let result = Math.round(operate(operator, num1, num2) * 1000000) / 1000000;
        console.log(result);
        // Put result into num1
        num1 = result;
        num2 = null;
        // Update operator
        operator = e.target.innerText;
        // Display result
        display.textContent = String(result);
        displayVal = '';
    }
}

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(button => button.addEventListener('click', setOperator));

function equals(e) {
    if (num1 && operator && displayVal !== '') {
        num2 = Number(displayVal);

        // Check for divide by zero
        if (operator === '/' && num2 === 0) {
            alert('Illegal operation');
            clear();
            return;
        }
        
        let result = Math.round(operate(operator, num1, num2) * 1000000) / 1000000;
        displayVal = String(result);
        display.textContent = displayVal;
        num1 = null;
        num2 = null;
    }
}

const equalsButton = document.querySelector('.equals');
equalsButton.addEventListener('click', equals);

function clear(e) {
    num1 = null;
    num2 = null;
    operator = null;
    displayVal = '';
    display.textContent = '';
}

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', clear);