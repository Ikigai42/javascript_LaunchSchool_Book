/* 
2. Use the arithmetic operators to determine the individual digits of a 4-digit number like 4936:

thousands place is 4
hundreds place is 9
tens place is 3
ones place is 6

hint: Use number % 10 to determine the rightmost digit. Then use that value and % again to get the tens digit. Repeat until you have all 4 digits.

hint; Once you have the ones digit from the previous hint, subtract it from the current number, then divide the result by 10. Repeat hint 1 to get the next digit.
*/
let number = 4936;

let ones = 4936 % 10; // ones variable returns 6

number = (number - ones) / 10; // number variable returns 493

let tens = number % 10; // tens variable returns 3

number = (number - tens) / 10; // number variable returns 49

let hundreds = number % 10; // hundreds variable returns 9

let thousands = (number - hundreds) / 10; // thousands variable returns 4

console.log(`For the number 4936:
Thousands place is ${thousands}
Hundreds place is ${hundreds}
Tens place is ${tens}
Ones place is ${ones}`);