//10. What gets returned by y++ in the second snippet, and why?

// Consider this code:
let x = '5';
x = x + 1;
//=> "51"

// Now, consider this code:
let y = '5';
y++; //Returns the number 5 since the post-increment operator coerces the string '5' into a number. The current value of y is the number 6 but the previous value is returned in post-increment operators. To return the current value use the pre-increment operator i.e.,(++y would've returned the number value 6)

/**LS
The return value is the numeric value 5.

If you apply ++ to a string, JavaScript coerces it into a number. In this case, "5" gets coerced to the number 5. After coercion, it then increments the value to 6. However, the return value is 5 since the post-increment operator (y++) returns the original value of y, not the incremented value.

This shows that x++ is not the same thing as x = x + 1.
 */
