/*
11. What value does the following expression evaluate to?

parseInt('3.1415')

*/

/*
The expression evaluates to the number 3 since parseInt stops converting digits if it reaches any non-digit such as . or _

The parseFloat() function can convert decimal values;
*/

/*LS
It evaluates to 3. parseInt converts strings that begin with a digit to their numeric equivalent. If it encounters a non-digit such as ., it stops converting. Thus, this example converts the 3 at the beginning of the string but ignores everything else.
*/
