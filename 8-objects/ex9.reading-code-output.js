let foo = {
  a: 'hello',
  b: 'world',
}; // declaring foo variable and initializes it to an object literal => returns undefined

let qux = 'hello'; //declaring a qux variable and initializing it to the string value "hello" => returns undefined

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
} //Function declaration bar() with two parameters. Inside the scope of function bar, Reassigns the object's property a with the argument1 argument with dot notation to the string value 'hi', mutating the original object.
// Attempts to ressigns argument2 to the string value 'hi'.
//There is no return statement so function implicitly returns the primitive value of undefined

bar(foo, qux); //Invokes the bar function passing in the argument foo which is an object, and the argument qux but the function has no explicit return value so returns undefined.
//Mutates foo's a property reassigning it to the string value 'hi'
//Assigns the string value 'hi' to argument2 within the body of the function.

console.log(foo.a); //Passes in the foo object accessing property a's current value with dot notation from the console() function  => 'hi'
console.log(qux); //Passes in the current (original, primitives are immutable) value that the qux variable points to, to the console() function => 'hello'

/*LS
The program logs 'hi' and 'hello' 
The reason behind this is that objects are mutable; strings and other primitives are not. 
Also, variable reassignment, such as that on line 10, doesn't mutate the original object even when the object is mutable. Thus, line 9 mutates the foo by assigning its a property to a new value ('hi'). Therefore, the code on line 19 logs hi. On the other hand, line 10 reassigns the argument2 variable, but it doesn't mutate the string represented by qux. Thus, line 20 logs hello: the original value of the qux variable.
*/
