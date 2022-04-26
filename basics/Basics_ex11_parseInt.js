/*
11. What value does the following expression evaluate to?
parseInt('3.1415')

book solution
It evaluates to 3. parseInt converts strings that begin with a digit to their numeric equivalent. If it encounters a non-digit such as ., it stops converting. Thus, this example converts the 3 at the beginning of the string but ignores everything else.

*/

console.log(
  `parseInt('3.1415') returns the Number 3 since it converts strings to numbers that begin with a digit. It will stop evaluating once it reaches a non-numerical character.`
);
console.log(`Syntax: parseInt(string, radix)`);
console.log(`-If the first character cannot be converted, NaN is returned.
-Leading and trailing spaces are ignored.
-A radix parameter specifies the number system to use:
-2 = binary, 8 = octal, 10 = decimal, 16 = hexadecimal.
-If radix is omitted, JavaScript assumes radix 10. 
-If the value begins with "0x", JavaScript assumes radix 16.`);
