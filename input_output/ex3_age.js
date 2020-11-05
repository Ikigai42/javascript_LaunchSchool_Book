/*
3. Modify the age.js program you wrote in the exercises for the Variables chapter. The updated code should ask the user to enter their age instead of hard-coding the age in the program. Here's an example run:

How old are you? 22
You are 22 years old.
In 10 years, you will be 32 years old.
In 20 years, you will be 42 years old.
In 30 years, you will be 52 years old.
In 40 years, you will be 62 years old. 
*/ 
let readlineSync = require('readline-sync');
let age = Number(readlineSync.question('How old are you?'));

console.log(`You are ${age} years old.`);
console.log(`In 10 years, you will be ${10 + age} years old.`);
console.log(`In 20 years, you will be ${20 + age} years old.`);
console.log(`In 30 years, you will be ${30 + age} years old.`);
console.log(`In 40 years, you will be ${40 + age} years old.`);