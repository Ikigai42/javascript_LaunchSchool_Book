/*
3. Write a program that uses a multiply function to multiply two numbers and returns the result. Ask the user to enter the two numbers, then output the numbers and result as a simple equation.
*/

function multiply() {
  //initialize rlSync object to the realline-sync library
  let rlSync = require('readline-sync');
  let num1 = parseFloat(rlSync.question('Enter the first number: '));
  let num2 = parseFloat(rlSync.question('Enter the second number: '));
  let product = num1 * num2;

  console.log(`${num1} * ${num2} = ${product}`);
  return product;
}

multiply();

//refactor 👆
function getNumber(prompt) {
  let rlSync = require('readline-sync');
  let num = parseFloat(rlSync.question(prompt));

  return num;
}

function multiply2(num1, num2) {
  return num1 * num2;
}

let firstNum = getNumber('Enter first number to multiply: ');
let secondNum = getNumber('Enter second number to multiply: ');

let product = multiply2(firstNum, secondNum);

console.log(`${firstNum} * ${secondNum} = ${product}`);
