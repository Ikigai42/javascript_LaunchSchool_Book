/*
5. Refactor the code from the previous exercise to use explicit coercion, so it logs 15 instead.

The parseInt() function: parses a string argument and returns an integer: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
*/
console.log(parseInt('5', 10) + 10); // 15
//or
console.log(Number('5') + 10); // 15
/*
When used as a function, Number(value) converts a string or other value to the Number type. If the value can't be converted, it returns NaN.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
*/
