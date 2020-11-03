/*
4. Explain why this code logs '510' instead of 15.
   console.log('5' + 10);

   //book solution
   The code logs 510 since every + expression that has a string operand produces a string result no matter what the other operand is. In other words, the Number 10 gets coerced to a String and then gets concatenated to the String '5', which produces '510'.
*/

console.log(`When using the + operator, if either operand is of the String data type, the JavaScipt engine implicitly coerces the non-string operand, a Number data type in this instance, to a String type returning '510' from the console.log('5' + 10) statement.`);