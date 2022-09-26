/*
3. Write a program that uses a multiply function to multiply two numbers and returns the result. Ask the user to enter the two numbers, then output the numbers and result as a simple equation.

Copy Code
$ node multiply.js
Enter the first number: 3.141592653589793
Enter the second number: 2.718281828459045
3.141592653589793 * 2.718281828459045 = 8.539734222673566

SOLUTION
function multiply(left, right) {
  return left * right;
}

function getNumber(prompt) {
  let readlineSync = require('readline-sync');
  return parseFloat(readlineSync.question(prompt));
}

let left = getNumber('Enter the first number: ');
let right = getNumber('Enter the second number: ');
console.log(`${left} * ${right} = ${multiply(left, right)}`);
*/

let readlineSync = require('readline-sync');

function multiply(num1, num2) {
  let result = num1 * num2;
  return result
}

let firstNum = Number(readlineSync.question("Enter the first number to multiply: "));
let secondNum = Number(readlineSync.question("Enter the second number to multiply: "));
let result = multiply(firstNum, secondNum);
console.log(`${firstNum} * ${secondNum} = ${result}`)