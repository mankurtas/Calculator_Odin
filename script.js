//Select items
const display = document.getElementById('display')

const allButtons = document.querySelectorAll('button')

const clear = document.getElementsByClassName('.clear')
const sign = document.getElementsByClassName('.sign')
const percent = document.getElementsByClassName('.percent')

const operators = document.getElementsByClassName('.operator')
const operands = document.querySelectorAll('.operand')

const zero = document.getElementById('zero')

const decimal = document.getElementsByClassName('.decimal')
const equals = document.getElementsByClassName('.equals')


// allButtons.forEach(element => {
//     element.addEventListener('click', () => {
//         console.log(element.value)
//     } )
// });

let firstNumber = '';
let secondNumber = '';



let operator = '';

//Listen operands first time:


operands.forEach(element => {
    element.addEventListener ('click', setFirstNumber);
});

function setFirstNumber(event){
   firstNumber +=event.target.value
   console.log(firstNumber)

   if(firstNumber.length ==7){
        operands.forEach(element => {
            element.removeEventListener('click', setFirstNumber);
        });
   }
    displayNumber()

}


function displayNumber (){
    display.textContent = firstNumber;
    console.log(firstNumber.length)
}
