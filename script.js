//Select items
const display = document.getElementById('display')

const allButtons = document.querySelectorAll('button')

const clear = document.querySelector('.clear')
const sign = document.querySelector('.sign')
const percent = document.getElementsByClassName('.percent')

const operators = document.getElementsByClassName('.operator')
const operands = document.querySelectorAll('.operand')

const zero = document.getElementById('zero')

const decimal = document.getElementsByClassName('.decimal')
const equals = document.getElementsByClassName('.equals')



let firstNumber = 0;
let secondNumber = 0;
let operator = '';
let positiveNegative = '+'

//Add listener to clear all

clear.addEventListener('click', ()=> {
    // display.textContent = 0;
    firstNumber = 0;
    secondNumber = 0;
    displayNumber()
})

//Add listener to toggle sign

sign.addEventListener('click', () =>{

    if(firstNumber !==0 ) {
        if(!isNaN(parseFloat(firstNumber))){
            firstNumber =-firstNumber
        }
        
    }

    displayNumber()
    
})

//Listen operands first time:

operands.forEach(element => {
    element.addEventListener ('click', setFirstNumber);
});

function setFirstNumber(event){

   if(firstNumber.length ==7){
        firstNumber = firstNumber
   } else {
    firstNumber +=event.target.value
    console.log(firstNumber)

   }
    displayNumber()
}

function displayNumber (){
    display.textContent = firstNumber;
    console.log(firstNumber.length)
}
