/*
6. Use the template literal syntax along with the expression Number('5') + 10 to log the following sentence to the console:

The value of 5 + 10 is 15.
*/

console.log(`The value of 5 + 10 is ${Number('5') + 10}.`);

//notes
console.log(
  `The Number() method converts a value to a number. If the value cannot be converted, NaN is returned.`
);
console.log(`For booleans, Number() returns 0 or 1.`);
console.log(
  `For dates, Number() returns milliseconds since January 1, 1970 00:00:00.`
);
console.log(`For strings, Number() returns a number or NaN.`);
