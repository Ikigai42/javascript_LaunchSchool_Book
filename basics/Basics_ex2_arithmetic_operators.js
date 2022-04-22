/* 
2. Use the arithmetic operators to determine the individual digits of a 4-digit number like 4936:

thousands place is 4
hundreds place is 9
tens place is 3
ones place is 6

START STATE: Four digit number input
GOAL STATE: logging seperated individual digits
CONSTRANTS: use arithmitic operators

Which role/s of variable from Jorma Sajaniemi’s framework? 
1. walker
2. most-recent holder
*/
let inputNum;
let mutatedInputNum;
let getOnesPlace;
let getTensPlace;
let getHundredsPlace;
let getThousandsPlace;

inputNum = 4242;
getOnesPlace = inputNum % 10;

mutatedInputNum = (inputNum - getOnesPlace) / 10;
getTensPlace = mutatedInputNum % 10;

mutatedInputNum = (mutatedInputNum - getTensPlace) / 10;
getHundredsPlace = mutatedInputNum % 10;

getThousandsPlace = (mutatedInputNum - getHundredsPlace) / 10;

console.log(`Input Number is ${inputNum}`);
console.log(`Thousands place is ${getThousandsPlace}`);
console.log(`Hundreds place is ${getHundredsPlace}`);
console.log(`Tens place is ${getTensPlace}`);
console.log(`Ones place is ${getOnesPlace}`);

/**
hint: Use number % 10 to determine the rightmost digit. Then use that value and % again to get the tens digit. Repeat until you have all 4 digits.

hint: Once you have the ones digit from the previous hint, subtract it from the current number, then divide the result by 10. Repeat hint 1 to get the next digit.
**/
