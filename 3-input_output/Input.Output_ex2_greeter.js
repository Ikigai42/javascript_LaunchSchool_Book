/*
2. Modify the greeter.js program to ask for the user's first and last names separately, then greet the user with their full name.

$ node greeter.js
What is your first name? Sue
What is your last name? Roberts
Hello, Sue Roberts!
*/
let readlineSync = require('readline-sync');
let firstName = readlineSync.question(`What is your first name?`);
let lastName = readlineSync.question(`What is your last name?`);

console.log(`Hello, ${firstName} ${lastName}!`);
