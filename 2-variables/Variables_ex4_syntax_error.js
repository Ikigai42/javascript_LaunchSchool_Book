/*
4. What happens when you run the following code? Why?

const NAME = 'Victor';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

NAME = 'Joe';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);
*/

console.log(`What happens when you run the following code? Why?
const NAME = 'Victor';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

NAME = 'Joe';
 RETURNS>>Uncaught SyntaxError: Identifier 'NAME' has already been declared

console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

After the constant variable NAME is declared and initialized assigning it the String value "Victor". The code uses JS template literals to interpolate the value of the variable NAME into the strings prior to logging it to the console.

Trying to reassign the constant variable NAME results in an Error because CONSTANTS have an immutable binding to their values, and once you declare a constant, you cannot assign it a new value.`);
