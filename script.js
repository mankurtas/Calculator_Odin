//Select items
const display = document.getElementById('display')

const allButtons = document.querySelectorAll('button')

const clear = document.querySelector('.clear')
const sign = document.querySelector('.sign')
const percent = document.getElementsByClassName('.percent')

const operators = document.querySelectorAll('.operator')
const operands = document.querySelectorAll('.operand')

const zero = document.getElementById('zero')

const decimal = document.querySelector('.decimal')
const equals = document.getElementsByClassName('.equals')



let firstNumber = Array (1).fill(0);
let firstNumberisSet = false;

let secondNumber = Array (1).fill(0);

let operator = Array (1).fill(0);
let operatorClicked = false;
let rezult =[];

//Add listener to clear all

clear.addEventListener('click', ()=> {
    firstNumber = [0];
    firstNumberisSet = false;

    secondNumber = [0];
    operator = [0];
    operatorClicked = false;

    operands.forEach(element => element.removeEventListener('click', setSecondNumber))

    operands.forEach(element => element.addEventListener('click', setFirstNumber))

    operators.forEach(element => element.addEventListener('click', setOperator))

    operators.forEach(btn => btn.classList.remove('clicked'))
    
    displayOutput()

})

//Add listener to toggle sign

sign.addEventListener('click', () =>{

    let number = Number(firstNumber.join(''));
    let numberSecond = Number(secondNumber.join(''));


    if(number !==0 && !firstNumberisSet ) {

        let current = parseFloat(number);

        current = - current;
        let numberString = current.toString();
        firstNumber = numberString.split('');
    }
    else {
        let current = parseFloat(numberSecond);

        current = - current;
        let numberString = current.toString();
        secondNumber = numberString.split('');  
    }
        
    displayOutput()
    
})

//Funtion to use decimal
function setDecimal(event) {

    let isFloatNumber = firstNumber.some(item => item == '.')
    let isSecondNumber = secondNumber.some(item => item == '.')

    if(!isFloatNumber && !firstNumberisSet) {
        firstNumber.push(event.target.value)
        console.log(firstNumber)
    } 
    else if (!isSecondNumber && firstNumberisSet){
        secondNumber.push(event.target.value)
        console.log(secondNumber)
    }
    
    displayOutput()
}
// Listen Decimal
decimal.addEventListener('click', setDecimal)

//Listen operands first time:

operands.forEach(element => {
    element.addEventListener ('click', setFirstNumber);
});

//Set First number

function setFirstNumber(event){

   if(firstNumber.length >5){
        firstNumber = firstNumber
    displayOutput()

   } else if (firstNumber[0] == 0 && firstNumber.length == 1){
    firstNumber.fill(event.target.value)
    console.log(firstNumber)
    displayOutput()

   } else {
    firstNumber.push(event.target.value)
    displayOutput()

   }
}

//Set second number
function setSecondNumber(event){

    firstNumberisSet = true;
    operatorClicked = false;

    operators.forEach(element => {
        element.removeEventListener ('click', setOperator);
    });

    if(secondNumber.length >5){
         secondNumber = secondNumber
     displayOutput()
 
    } else if (secondNumber[0] == 0 && secondNumber.length == 1){
     secondNumber.fill(event.target.value)
     console.log(secondNumber)
     displayOutput()
 
    } else {
     secondNumber.push(event.target.value)
     console.log(secondNumber)
     displayOutput()
 
    }
 }


//Function get operator

let setOperator = function operatorSet (event){


    operator.fill(event.target.value)
    operators.forEach(btn => btn.classList.remove('clicked'))
    event.target.classList.toggle('clicked')

    operatorClicked = true;

    operands.forEach(element => element.removeEventListener('click', setFirstNumber))

    operands.forEach(element => element.addEventListener('click', setSecondNumber))
    displayOutput()
}

//Listen operators

operators.forEach(element => {
    element.addEventListener ('click', setOperator);
});



//Display Output

function displayOutput (){

    display.textContent = firstNumber.join('').toString();

    if(operatorClicked) {
        display.textContent = operator.toString();
    }
    else if(firstNumberisSet){
        display.textContent = secondNumber.join('').toString();
    }

    console.log(`1st Lenght: ${firstNumber.length}`)
    console.log(`1st Type of: ${typeof(firstNumber)}`)
    console.log(`1st irst number: ${firstNumber}`)
    console.log(`Operator ${operator}`)
    console.log(`2nd Lenght: ${secondNumber.length}`)
    console.log(`2nd Type of: ${typeof(secondNumber)}`)
    console.log(`2nd Second number: ${secondNumber}`)
}

displayOutput()