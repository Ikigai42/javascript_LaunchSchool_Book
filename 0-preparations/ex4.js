/* 
4. 1)Use node to run the foo.js file using node. What does it output?
   2)Copy and paste the code from foo.js into the node REPL. What does it output?
   3)Copy and paste the code from foo.js into the Chrome console REPL. What does it output?

//1 Use node to run the foo.js file using node
[preparations_exercises_Ex3 (master)]$ node foo.js

//What does it output?
bar

//2 Copy and paste the code from foo.js into the node REPL. What does it output?
[preparations (master)]$ node
> let foo = 'bar';
undefined
> console.log(foo);
bar
undefined
> foo;
'bar'

//3 Copy and paste the code from foo.js into the Chrome console REPL. What does it output?
let foo = 'bar';
console.log(foo);
foo;
bar
"bar"
*/