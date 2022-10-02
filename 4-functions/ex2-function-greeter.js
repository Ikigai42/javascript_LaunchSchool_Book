/*
2. In the exercises for the previous chapter, you wrote a dynamic greeter program named greeter.js. Add a function to this program that solicits the user's first and last names in separate invocations; the function should return the appropriate name as a string. Use the return values to greet the user with their full name.
*/

//Function declaration of getName() function with a prompt parameter
function getName(prompt) {
  //initialize rlSync object to the realline-sync library
  let rlSync = require('readline-sync');
  //Initialize name variable to save the value from invoking the question method on the rlSync object
  let name = rlSync.question(prompt); //pass in the prompt argument

  return name; //return the user inputted value
}

//Initialize firstname variable
let firstName = getName('What is your first name?'); //invoke getName() function and pass in the string value question
//Initialize the lastName variable
let lastName = getName('What is your last name?'); //invoke getName() function and pass in another string value question

console.log(`Hello, ${firstName} ${lastName}!`); //Log the greeting interpolating the user's string values with a template literal.
