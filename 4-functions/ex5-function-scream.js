//5. What does the following code log to the console?

function scream(words) {
  //Function declaration scream() with the parameter words
  return words + '!!!!'; //returning the string value of words as it's concatenated with the string value "!!!! (nothing is logged)"
}

//Invoking the scream() function passing in the string value 'Yipeee'
scream('Yipeee'); //returns the string value 'Yipeee!!!!'

//Nothing is returned to the console

/*LS
This program also doesn't log anything. The function returns a value, Yipeee!!!!, but it doesn't do anything with it. In particular, it doesn't write it to the console.
*/
