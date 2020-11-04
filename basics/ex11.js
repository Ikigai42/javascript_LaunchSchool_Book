/*
11. What value does the following expression evaluate to?
parseInt('3.1415')

book solution
It evaluates to 3. parseInt converts strings that begin with a digit to their numeric equivalent. If it encounters a non-digit such as ., it stops converting. Thus, this example converts the 3 at the beginning of the string but ignores everything else.

*/

console.log(`parseInt('3.1415') returns the Number 3 since it converts strings to numbers that begin with a digit. It will stop evaluating once it reaches a non-numerical character.`);