//Select items
const display = document.getElementById('display')

const allButtons = document.querySelectorAll('button')

const clear = document.querySelector('.clear')
const sign = document.querySelector('.sign')
const percent = document.getElementsByClassName('.percent')

const operators = document.getElementsByClassName('.operator')
const operands = document.querySelectorAll('.operand')

const zero = document.getElementById('zero')

const decimal = document.querySelector('.decimal')
const equals = document.getElementsByClassName('.equals')



let firstNumber = Array (1).fill(0);
let secondNumber = 0;
let operator = '';
let positiveNegative = '+'

//Add listener to clear all

clear.addEventListener('click', ()=> {
    firstNumber = [0];
    secondNumber = 0;
    displayNumber()

    decimal.addEventListener('click', setDecimal)
})

//Add listener to toggle sign

sign.addEventListener('click', () =>{

    let number = Number(firstNumber.join(''));


    if(number !==0 ) {

        let current = parseFloat(number);

        current = - current;
        let numberString = current.toString();
        firstNumber = numberString.split('');
    }
        
    displayNumber()
    
})

//Funtion to use decimal
function setDecimal(event) {
    firstNumber.push(event.target.value)
    console.log(firstNumber)
    decimal.removeEventListener('click',setDecimal)
    displayNumber()
}
// Listen Decimal
decimal.addEventListener('click', setDecimal)

//Listen operands first time:

operands.forEach(element => {
    element.addEventListener ('click', setFirstNumber);
});

function setFirstNumber(event){

   if(firstNumber.length >5){
        firstNumber = firstNumber
    displayNumber()

   } else if (firstNumber[0] == 0 && firstNumber.length == 1){
    firstNumber.fill(event.target.value)
    console.log(firstNumber)
    displayNumber()

   } else {
    firstNumber.push(event.target.value)
    console.log(firstNumber)
    displayNumber()

   }
}

function displayNumber (){
    display.textContent = firstNumber.join('').toString();
    console.log(`Lenght: ${firstNumber.length}`)
    console.log(`Type of: ${typeof(firstNumber)}`)
    console.log(`First number: ${firstNumber}`)
}

displayNumber()