/*
12. What value does the following expression evaluate to?

'12' < '9'

book solution
This question is a bit tricky: the expression evaluates as true since the operands are strings, not numbers. When you compare two strings, JavaScript performs a character-by-character comparison going from left to right, so on the first comparison, it determines that '1' < '9', so '12' must be less than '9'.'

Had you used numbers instead, the expression would evaluate as false.
*/

console.log(`'12' < '9' Evaluates to the boolean true since '12' is a string and the engine evaluates the first character 1 less than 9`);