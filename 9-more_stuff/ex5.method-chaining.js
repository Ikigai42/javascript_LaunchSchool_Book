//The function declaration with the doSomething indentifier with the string parameter takes in a string argument
function doSomething(string) {
  return string
    .split(' ') //splits the string at any space and returns an array of those values
    .reverse() //reverses the values in the array and then returns an array
    .map((value) => value.length); //map uses an arrow function to pass in each value of the array and then returns a new array with the lengths of the strings as numeric values
}
console.log(`doSomething('Hello World')`);
console.log(doSomething('Hello World')); // => [5, 5]

/* 
"Hello World".split(' ')                         returns => ["Hello", "World"];
["Hello", "World"].reverse()                     returns => ["World", "Hello"];
["World", "Hello"].map((value) => value.length); returns => [5, 5]
*/

/*LS
This code converts a string into an array of words, reverses that array, and then returns a new array that contains the lengths of the words. It assumes that a single space character delimits the words in the original string.
 */
console.log(`doSomething('Pursuit of happiness')`);
console.log(doSomething('Pursuit of happiness')); // => [ 9, 2, 7 ]
