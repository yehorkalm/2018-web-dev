let firstNum = Number(prompt('This is a calculator. Enter first value below:'));
let action = prompt('Enter the action (+ - * /) below:');
let secondNum = Number(prompt('Enter second value below:'));
let result;

switch (action) {
  case '+':
    result = Number(firstNum + secondNum);
    break;
  case '-':
    result = Number(firstNum - secondNum);
    break;
  case '*':
    result = Number(firstNum * secondNum);
    break;
  case '/':
    result = Number(firstNum / secondNum);
    break;

  default:
    break;
}

alert('The result is: ' + result);