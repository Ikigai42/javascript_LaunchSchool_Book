/*
6. What does the following code log to the console?

function scream(words) {
  return words + '!!!!';
}

scream('Yipeee');

//Solution
This program also doesn't log anything. The function returns a value, Yipeee!!!!, but it doesn't do anything with it. In particular, it doesn't write it to the console.

*/ 

console.log(`What does the following code log to the console?

function scream(words) {
  return words + '!!!!';
}

scream('Yipeee');`);

console.log(`The scream function passes the argument String 'Yipeee', won't log anything to the console because there is no console.log() function.`);

function scream(words) {
  return words + '!!!!';
}

scream('Yipeee');
