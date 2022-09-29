/*
4. Explain why this code logs '510' instead of 15.
*/
console.log('5' + 10); // '510' string value

//Logs the string value '510' because when adding string values to other data types/values, JS uses implicit coercion to convert the non-string values into strings. I believe, that in other arithmetic operations (-, *, /) will use implicit coercion to convert the string value into a number.

console.log('5' - 10); // -5 number value
console.log('5' * 10); // 50 number value
console.log('5' / 10); // 0.5 number value
