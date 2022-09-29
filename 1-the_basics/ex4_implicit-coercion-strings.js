/*
4. Explain why this code logs '510' instead of 15.
*/
console.log('5' + 10); // '510' string value

//Logs the string value '510' because when adding string values to other data types/values, JS uses implicit coercion to convert the non-string values into strings. I believe, that in other arithmetic operations (-, *, /) will use implicit coercion to convert the string value into a number.

console.log('5' - 10); // -5 number value
console.log('5' * 10); // 50 number value
console.log('5' / 10); // 0.5 number value

/*Launch School
The code logs 510 since every + expression that has a string operand produces a string result no matter what the other operand is. In other words, the Number 10 gets coerced to a String and then gets concatenated to the String '5', which produces '510'.
*/
