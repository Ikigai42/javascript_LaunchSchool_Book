/*
5. Take a look at this code snippet:
What does this program log to the console? Why?
*/
let foo = 'bar'; // outer scope declares let with the variable name foo and initializes it to the string value 'bar'
{
  let foo = 'qux'; // inner scope declares let with the variable name foo and initializes it to the string value 'qux'
}

console.log(foo); // logs the current value of the foo variable from the same (outer) scope > 'bar'

/*LS
The program logs bar.

-Line 5 initializes a variable named foo with the value'bar'. 
-Line 6 starts a block, which creates a new scope for let variables. 
-The variable on line 5 is still visible at this point, but line 7 declares a new variable named foo that shadows (hides) the variable from line 5. This second variable gets initialized to 'qux', but it goes out of scope on line 8 when the block ends. 
-That brings foo from line 5 back into scope, so line 10 logs its value: bar.
 */
