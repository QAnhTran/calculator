const calculator = document.querySelector(`.calculator`);
const keys = calculator.querySelector(`.calculator-keys`);
const button = calculator.querySelector('button');
let num1, num2, operator, result;

function add(first, second) {
    return parseFloat(first) + parseFloat(second);
}

function subtract(first, second) {
    return parseFloat(first) - parseFloat(second);
}

function multiply(first, second) {
    return parseFloat(first) * parseFloat(second);
}

function divide(first, second) {
    return parseFloat(first) / parseFloat(second);
}

function operate(firstVal, secondVal, operator) {
    let result = "";
    if (operator === "add") {
        result = parseFloat(firstVal) + parseFloat(secondVal);
    } else if (operator === "subtract") {
        result = parseFloat(firstVal) - parseFloat(secondVal);
    } else if (operator === "multiply") {
        result = parseFloat(firstVal) * parseFloat(secondVal);
    } else if (operator === "divide") {
        result = parseFloat(firstVal) / parseFloat(secondVal);
    } else {
        alert("There is no operand assigned to the equation");
    }
    console.log(firstVal);
    console.log(secondVal,operator);
    console.log(parseFloat(firstVal))
    return result;
    switch(operator) {
        case "add":
            result = add(firstVal,secondVal);
        break;
        case "subtract":
            result = subtract(firstVal,secondVal);
        break;
        case "multiply":
            result = multiply(firstVal,secondVal);
        break;
        case "divide":
            result = divide(firstVal,secondVal);
        break;
        default:
            alert("There is no operand assigned to the equation");
            console.log(operator);
            console.log(firstVal,secondVal);
            return result;
    }
} 
//var elements = '1234567890+-*/='
/*
    for(let i = 0; i< 15; i++){
      let newBtn = document.createElement('button');
      newBtn.innerHTML= elements.charAt(i);
      document.querySelector('#button-container').appendChild(newBtn);
    }
    let clrBtn = document.createElement('button');
    clrBtn.innerHTML = "Clear";
    document.querySelector('#button-container').appendChild(clrBtn);

    let btns = document.querySelectorAll('#button-container');
    for (let i = 0; i<btns.length; i++) {
        btns[i].onclick = function (){
            display.textContent = btns[i].value;
        }
    }

*/
/*const display = document.querySelector('#display');
display.textContent = 0;
*/

const calcDisplay = calculator.querySelector(".calculator-display");


keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target;
        const action = key.dataset.action;
        const disNum = calcDisplay.textContent;
        const pressed = key.textContent;

        Array.from(key.parentNode.children)
        .forEach(k => k.classList.remove('is-depressed'))


        const previousKeyType = calculator.dataset.previousKeyType;
        

        if(!action) {
            if (calcDisplay.textContent === "" || previousKeyType === 'operator') {
                calcDisplay.textContent = pressed;
            } else {
                calcDisplay.textContent = disNum + pressed;
            }
        } if(action === "add" || action === "subtract" || action === "multiply" || action === "divide") {
            key.classList.add('is-depressed');
            calculator.dataset.previousKeyType = 'operator';
            calculator.dataset.firstValue = disNum
            calculator.dataset.operator = action
            console.log('operator pressed');
        } if (action === "decimal") {
            console.log("decimal button pressed");
        } if (action === "clear") {
            console.log("clear button pressed");
        } if (action === "calculate") {
            num1 = calculator.dataset.firstValue;
            operator = calculator.dataset.operator;
            num2 = disNum;
            calcDisplay.textContent = operate(num1,num2, operator);
            console.log("equals pressed");
        }
    }   
})





