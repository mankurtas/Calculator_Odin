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
let secondNumber = Array (1).fill(0);
let operator = Array (1).fill(0);
let rezult =[];

//Add listener to clear all

clear.addEventListener('click', ()=> {
    firstNumber = [0];
    secondNumber = 0;

    operands.forEach(btn => btn.addEventListener('click', setFirstNumber))
    operators.forEach(btn => btn.classList.remove('clicked'))
    displayOutput()

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
        
    displayOutput()
    
})

//Funtion to use decimal
function setDecimal(event) {

    let isFloatNumber = firstNumber.some(item => item == '.')

    if(!isFloatNumber) {
        firstNumber.push(event.target.value)
        console.log(firstNumber)
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
    console.log(firstNumber)
    displayOutput()

   }
}

//Function get operator

let setOperator = function operatorSet (event){
    operator.fill(event.target.value)
    operators.forEach(btn => btn.classList.remove('clicked'))
    event.target.classList.toggle('clicked')

    operands.forEach(btn => btn.removeEventListener('click', setFirstNumber))

}

//Listen operators

operators.forEach(element => {
    element.addEventListener ('click', setOperator);
});



//Display Output

function displayOutput (){
    display.textContent = firstNumber.join('').toString();
    console.log(`Lenght: ${firstNumber.length}`)
    console.log(`Type of: ${typeof(firstNumber)}`)
    console.log(`First number: ${firstNumber}`)
    console.log(`Operator ${operator}`)
    // console.log(`Lenght: ${secondNumber.length}`)
    // console.log(`Type of: ${typeof(secondNumber)}`)
    // console.log(`First number: ${secondNumber}`)
}

displayOutput()