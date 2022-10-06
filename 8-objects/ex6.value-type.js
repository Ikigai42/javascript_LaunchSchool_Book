//6. Which of the following values are primitive values? Which are objects? Which are neither?

'foo'; // Primitive value => string value

(3.1415)[('a', 'b', 'c')]; // Primitive value => number value // Object => array

false; // Primitive value => boolean value

foo; // Neither => Identifier

function bar() {
  return 'bar';
} // Object => function's are objects

undefined; // Primitive value => undefined value

({ a: 1, b: 2 }); // Object => object
