/*
7. Will an error occur if you try to access an array element with an index that is greater than or equal to the length of the array? For example:

let foo = ['a', 'b', 'c'];
foo.length;  // returns 3
foo[3];      // will this result in an error?
*/

console.log(`With an array no error will occur when you use an index value that has no matching element. Attempting to access an array element with an index that is greater than or equal to the length of the array will return undefined.`);

let foo = ['a', 'b', 'c'];
foo.length;  // returns 3
console.log(foo[3]); // returns undefined