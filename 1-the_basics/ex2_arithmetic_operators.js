/*
2. Use the arithmetic operators to determine the individual digits of a 4-digit number like 4936:

thousands place is 4
hundreds place is 9
tens place is 3
ones place is 6

*/
let number = 4936;
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
