/*
1. What does this code log to the console? Does executing the foo function affect the output? Why or why not?

let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);

//Solution
The code logs 1 to the console. foo doesn't affect the value assigned to bar on line 1 since JavaScript functions create an inner scope. Thus, the bar variable on line 3 is not the same as the one on line 1. In the end, foo() has no bearing on the final output.
*/

console.log(`What does this code log to the console? Does executing the foo function affect the output? Why or why not?

let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);`);

console.log("The console.log with the argument 'bar' logs the number 1. No, executing the foo() function doesn't affect the output because the foo() function initialized a new bar variable inside the scope of the function body and in a different scope.")

let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(`console.log(bar) logs to the console: ${bar}`);