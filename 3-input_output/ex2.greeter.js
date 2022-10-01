/*
2. Modify the greeter.js program to ask for the user's first and last names separately, then greet the user with their full name.
*/

let rlSync = require('readline-sync');

const firstName = rlSync.question("What's your first name?\n");
const lastName = rlSync.question("What's your last name?\n");

console.log(`Hello, ${firstName} ${lastName}!`);
