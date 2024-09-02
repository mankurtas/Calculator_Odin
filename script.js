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



let firstNumber = Array (1).fill(0);
let secondNumber = 0;
let operator = '';
let positiveNegative = '+'

//Add listener to clear all

clear.addEventListener('click', ()=> {
    // display.textContent = 0;
    firstNumber = [0];
    secondNumber = 0;
    displayNumber()
})

//Add listener to toggle sign

sign.addEventListener('click', () =>{

    let number = Number(firstNumber.join(''));


    if(number !==0 ) {

        let current = parseFloat(number);

        current = - current;


        // let currentString = current.toString();

        // if(!isNaN(current)){

        //     // if(currentString.length ==7 ){
        //         current = parseInt(currentString.slice(0,-1))
        //         firstNumber = -current
        //     // }
        //     // else{
        //         firstNumber =-firstNumber
        //     }
        let numberString = current.toString();
        firstNumber = numberString.split('');
        // firstNumber = firstNumber.map(char => Number(char));  
    }
        
    // }

    displayNumber()
    
})

//Listen operands first time:

operands.forEach(element => {
    element.addEventListener ('click', setFirstNumber);
});

function setFirstNumber(event){

   if(firstNumber.length >5){
        firstNumber = firstNumber
    displayNumber()

   } else if (firstNumber[0] == 0){
    // firstNumber = event.target.value;
    firstNumber.fill(event.target.value)
    console.log(firstNumber)
    displayNumber()

   } else {
    // firstNumber +=event.target.value
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