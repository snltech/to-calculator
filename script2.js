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
let toprow = document.querySelector('.top-row');
let botrow = document.querySelector('.bot-row');
let arrOperators = ["+", "-", "x", "÷"];

//  Clear function
function clearContent()
{
    toprow.textContent = 0;
    botrow.textContent = 0;
}

//  Clear button
const clear = document.querySelector('button[value="clear"]');
console.log(clear);
clear.addEventListener('click', clearContent);

// Update Screen
function updateScreen(e){
    if ((toprow.innerHTML == 0 && botrow.innerHTML == 0) || (toprow.innerHTML == ""))
    {
        toprow.innerHTML = this.innerHTML;
        botrow.innerHTML = 0;
    }
    else if(arrOperators.includes(this.innerHTML))
    {
        if(toprow.innerHTML.slice(-1) == "=")
        {
            alert('equality found');
        }
        else if(toprow.innerHTML.search(/\+/) != -1 || toprow.innerHTML.search(/\-/) != -1 ||
                toprow.innerHTML.search(/\x/) != -1 || toprow.innerHTML.search(/\÷/) != -1)
        {
            alert('You may not use two operators in a row!');
        }
        else
        {
            toprow.innerHTML = toprow.innerHTML.concat(this.innerHTML);    
        }
    }
    else
    {
        toprow.innerHTML = toprow.innerHTML.concat(this.innerHTML);
    }
}

//  Insert to screen
const buttons = document.querySelectorAll('.btns-container button');
buttons.forEach(item => item.addEventListener('click', updateScreen));