let rlSync = require('readline-sync');

let number1 = rlSync.question('Enter the first number\n');
let number2 = rlSync.question('Enter the second number\n');
let sum = number1 + number2;

console.log(
  `The string values ${number1} and ${number2} concatenate to ${sum}`
);

/*
Since number1 and number2 both hold string values instead of numbers, the + operator concatenates them instead of adding them. If you want to add two variables arithmetically, both variables must have the Number data type.
*/

let number3 = Number(rlSync.question('Enter the first number\n'));
let number4 = Number(rlSync.question('Enter the second number\n'));
let sumNum = number3 + number4;

console.log(`The number values ${number3} and ${number4} add to ${sumNum}`);

/*
rlSync.question() still returns a string, but this time we coerce each string to a number with the Number function. With numbers in both variables, JavaScript adds them arithmetically. 
*/
