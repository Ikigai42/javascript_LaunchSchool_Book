/*
1. What does this code log to the console? Does executing the foo function affect the output? Why or why not?
*/

let bar = 1; //initializes the variable var to the number value 1
//function declaration foo()
function foo() {
  let bar = 2; //initializes a new bar variable inside the function foo()'s scope and sets to the number value 2
}

foo(); //function invocation of foo() which has no explicit return value so returns default: undefined
console.log(bar); //function call logging the current value of the variable bar, 1, of the global scope

/*LS
The code logs 1 to the console. foo doesn't affect the value assigned to bar on line 1 since JavaScript functions create an inner scope. Thus, the bar variable on line 3 is not the same as the one on line 1. In the end, foo() has no bearing on the final output.
*/
