/*
4. What does the following code log to the console?
*/

function scream(words) {
  words = words + '!!!!';
  return; //terminates the function returning undefined
  console.log(words); //not executed
}

scream('Yipeee'); // logs nothing since the scream() funuction doesn't have an explicit return value.

//LS: It doesn't log anything. The return on line 3 terminates the function before it can log anything.
