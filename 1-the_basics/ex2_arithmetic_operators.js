/*
2. Use the arithmetic operators to determine the individual digits of a 4-digit number like 4936:

thousands place is 4
hundreds place is 9
tens place is 3
ones place is 6

*/
let number = 4936;
console.log(number);
let onesPlace = number % 10; // 6
let next = number - onesPlace; // 4930
let tensPlace = (next % 100) / 10; // 3
next = next - tensPlace * 10; // 4900
let hundredsPlace = (next % 1000) / 100; // 9
next = next - hundredsPlace * 100; // 4000
let thousandsPlace = next / 1000; // 4

console.log(`thousands place is: ${thousandsPlace}`);
console.log(`hundreds place is: ${hundredsPlace}`);
console.log(`tens place is: ${tensPlace}`);
console.log(`ones place is: ${onesPlace}`);

let num = 1234;
console.log(num);
let ones = num % 10;
num = (num - ones) / 10;
let tens = num % 10;
num = (num - tens) / 10;
let hundreds = num % 10;
let thousands = (num - hundreds) / 10;
console.log(`thousands place is: ${thousands}`);
console.log(`hundreds place is: ${hundreds}`);
console.log(`tens place is: ${tens}`);
console.log(`ones place is: ${ones}`);
/**
> let number = 4936
> let ones = number % 10
> ones
= 6

> number = (number - ones) / 10
= 493

> let tens = number % 10
> tens
= 3

> number = (number - tens) / 10
= 49

> let hundreds = number % 10
> hundreds
= 9

> let thousands = (number - hundreds) / 10
> thousands
= 4
 */
