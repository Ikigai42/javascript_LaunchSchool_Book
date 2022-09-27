/*
5. Identify the Constructors for each of the following      methods and classify each method as either a "Static" or a "Prototype" method:
Contrctors to Search: String, Object, Array, Number
-substring
-create
-fromCharCode
-slice
-toString

It might be that more than one constructor provides a method with a given name. Make sure you list them all in your answer. You can limit your search for methods to the String, Object, Array, and Number constructors.
*/

//substring() method
String.prototype.substring(); //instance method that can be called on instance of a string object

//create() method
Object.create(); //static method that can be called on the Object constructor

//fromCharCode() method
String.fromCharCode(); //static method that can be called on the String constructor

//slice() method
String.prototype.slice(); //instance method that can be called on an instance of a string object
Array.prototype.slice(); //instance method that can be called on an instance of an array object

//toString() method
String.prototype.toString(); //instance method that can be called on an instance of a string object
Object.prototype.toString(); //instance method that can be called on an instance of an object
Array.prototype.toString(); //instance method that can be called on an instance of an array object
Number.prototype.toString(); //instance method that can be called on an instance of a number
