//2. Which of the following values are valid keys for an object?

//String values are valid keys for Object literals, JS will coerce a nonstring value to a string value as a key

1; // Valid => number value is coerced to string value '1'
('1'); // Valid => string value
undefined; // Valid => undefined value is coerced to string value 'undefined'
('hello world'); // Valid => string value
true; // Valid => boolean value is coerced to string value 'true'
('true'); // Valid => string value

/* LS
All the listed values are valid keys. Note, though, that JavaScript coerces the non-string key values to strings. Given the listed values, 1 and '1' represent the same key, as do true and 'true'. This equivalency will bite you at some point; it's inevitable, so be ready.
 */
let myObj = {};
myObj[true] = 'hello';
myObj['true'] = 'world';
myObj[true]; // =>'world'
