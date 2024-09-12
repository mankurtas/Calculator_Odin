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
const equals = document.querySelector('.equals')



let firstNumber = Array (1).fill(0);
let firstNumberisSet = false;

let secondNumber = []
let secondNumberisSet = false;

let operator = [Array (1).fill(0)];
let operatorClicked = false;

let result = "";
let resultCalculated = false;


//Function to remove event Listener

function removeListener (item, fnc) {
    item.removeEventListener('click', fnc)
}

//Add listener to clear all

clear.addEventListener('click', ()=> {
    firstNumber = [0];
    firstNumberisSet = false;

    secondNumber = [];
    secondNumberisSet = false;

    operator = [0];
    operatorClicked = false;

    result = "";

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
    else if (!isSecondNumber && firstNumberisSet && operatorClicked && secondNumber.length !==0){
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

   if(firstNumber.length >8){
        firstNumber = firstNumber
   } else if (firstNumber[0] == 0 && firstNumber.length == 1){
    firstNumber.fill(event.target.value)
   } else {
    firstNumber.push(event.target.value)
   }

   displayOutput()

}

//Set second number
function setSecondNumber(event){

    secondNumberisSet = true;

    if(secondNumber.length >8){
         secondNumber = secondNumber
    } else if (secondNumber[0] == 0 && secondNumber.length == 1){
     secondNumber.fill(event.target.value)
    } else {
     secondNumber.push(event.target.value)
    }

    equals.addEventListener('click',  calculate)

    displayOutput()

 }
//Function get operator

let setOperator = function operatorSet (event){
    firstNumberisSet = true
    operatorClicked = true;

    operator.fill(event.target.value)
    operators.forEach(btn => btn.classList.remove('clicked'))
    event.target.classList.toggle('clicked')

    operands.forEach(element => element.addEventListener('click', setSecondNumber))
    displayOutput()
}

//Listen operators

operators.forEach(element => {
    element.addEventListener ('click', setOperator);
});

//Funtion calculate rezult
function calculate () {

    removeListener(equals, calculate)

    let num1 = Number(firstNumber.join(''))
    let num2 = Number(secondNumber.join(''))

    let oper = operator[0]

    result = oper === '+' ? num1 + num2 :
                 oper === '-' ? num1 - num2 :
                 oper === '*' ? num1 * num2 :
                 oper === '/' ? num1 / num2 :
                 oper === '%' ? num1 % num2 :
                 'Invalid operator';

    // result = Number(result).toPrecision(5)
    

    // result = Number(result).toExponential(3)

    result = result.toString();
    firstNumber = result.split('')
 
    firstNumberisSet = true;

    secondNumber = [];
    secondNumberisSet = false;

    operator = [0];
    operatorClicked = false;
    resultCalculated = true

    displayOutput()

}

//Display Output

function displayOutput (){

    if(resultCalculated){
        display.textContent = result;
        resultCalculated = false;

        operators.forEach(btn => btn.classList.remove('clicked'))

        operators.forEach(element => element.addEventListener('click', setOperator))
        operands.forEach(element => element.removeEventListener('click', setSecondNumber))

        

        console.log('display Result')
    }

    else if(operatorClicked && firstNumberisSet && secondNumberisSet){
        display.textContent = secondNumber.join('').toString();
        operators.forEach(element => {element.removeEventListener ('click', setOperator);});

        console.log('display Second No')
    }

    else if (firstNumberisSet && operatorClicked) {
        display.textContent = operator.toString();
        operands.forEach(element => element.removeEventListener('click', setFirstNumber))
        operands.forEach(element => element.addEventListener('click', setSecondNumber))

        console.log('display Operator')
    }

    else if (!firstNumberisSet){
        display.textContent = firstNumber.join('').toString();

        console.log('display First Number')

    }
    
    // console.log(`1st Lenght: ${firstNumber.length}`)
    // console.log(`1st Type of: ${typeof(firstNumber)}`)
    console.log(`1st irst number: ${firstNumber}`)
    // console.log(`First Is Set: ${firstNumberisSet}`)
    console.log(`Operator: ${operator}`)
    // console.log(`Operator is Set: ${operatorClicked}`)
    console.log(`2nd Second number: ${secondNumber}`)
    // console.log(`2nd Second is set: ${secondNumberisSet}`)
}   

displayOutput()

//Viskas veikia
//Kiti darba
//1. +/- veikimas kai First number tampa rezult, ai gal nereikia
//2. Procentu veikimas
//3. Limituoti Atsakymo ilgi