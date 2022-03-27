//  Operator functions


function add(a, b)
{
    return a + b;
}

function subtract(a,b)
{
    return a - b;
}

function multiply(a, b)
{
    return a * b;
}

function divide(a , b)
{
    return a / b;
}

function operate(operator, a , b)
{
    return operator(a, b);
}

//  DEFINITIONS & Selectors


const row = document.querySelector('.row'); // screen row
const clear = document.querySelector('button[value="clear"]'); // clear screen
const numeric = document.querySelectorAll('.numeric'); // selection of 0-9 buttons
const operators = document.querySelectorAll('.operator'); // operators selector

let num; // number being typed by user
let operator; 
let numBool = false; // Start recording a new number
let result;
let opBool = false; // Operator boolean

//  Clear function & Button


function clearContent()
{
    row.innerHTML = null;
    result = null;
    num = null;
    operator = null;
    numBool = false;
}

clear.addEventListener('click', clearContent);

//  Insert Numbers


function insertNumbers(e)
{
    if(row.innerHTML == null || numBool || row.innerHTML == 0)
    {
        row.innerHTML = this.innerHTML;
        if(numBool)
        {
            numBool = false;
        }
    }
    else
    {
        row.innerHTML = row.innerHTML.concat(this.innerHTML);
    }
}

numeric.forEach(item => item.addEventListener('click', insertNumbers));


//  Operators

function assignOp(e)
{
    if(result == null || opBool)
    {
        operator = window[this.getAttribute('value')];
        result = parseFloat(row.innerHTML);
        opBool = false;
    }
    else
    {
        num = parseFloat(row.innerHTML);
        result = operate(operator, result, num);
        (result.toFixed(2) == Infinity) ? alert('Cannot divide by 0, Please clear inputs') : row.innerHTML = result.toFixed(2);
        operator = window[this.getAttribute('value')];
    }
    numBool = true;
}

operators.forEach(item => item.addEventListener('click', assignOp))

// Equal

function calculate(e)
{
    if(operator == null)
    {
        row.inner = parseFloat(row.innerHTML);
        numBool = true;
    }
    else
    {
        num = parseFloat(row.innerHTML);
        result = operate(operator, result, num);
        (result.toFixed(2) == Infinity) ? alert('Cannot divide by 0, Please clear inputs') : row.innerHTML = result.toFixed(2);
        operator = null;
    }
    opBool = true;
}

const equal = document.querySelector('button[value="calculate"]');
equal.addEventListener('click', calculate);