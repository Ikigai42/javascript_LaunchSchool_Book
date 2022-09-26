/*
Concatenate two or more strings, one with your first name and one with your last, to create a string with your full name as its value.
For example, if your name is John Doe, think about how you can put 'John' and 'Doe' together to get 'John Doe'.
----------------

START STATE: input two or more strings with your first name as one input & second input as your last name
GOAL STATE: concatenate all of the input strings into a single string. 
CONSTRANTS: are all inputs strings? empty strings?

Which role/s of variable from Sajaniemi’s framework? 1. container to hold string inputs
*/
let firstName = 'Ikigai';
let lastName = 'Code';
let anotherString = ':)';

let fullName = `${firstName} ${lastName} ${anotherString}`;

console.log(fullName);
