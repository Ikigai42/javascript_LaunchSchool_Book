/*
4. What happens when you run the following code? Why?
*/
const NAME = 'Victor'; //Declaring the const variable NAME & initializing it to the string value 'Victor'
console.log('Good Morning, ' + NAME); // logs 'Good Morning, Victor'
console.log('Good Afternoon, ' + NAME); // logs 'Good Afternoon, Victor'
console.log('Good Evening, ' + NAME); // logs 'Good Evening, Victor'

NAME = 'Joe'; //Outputs an error as we can't reassign a new value to const. (TypeError: Assignment to constant variable.)
console.log('Good Morning, ' + NAME); //doesn't execute
console.log('Good Afternoon, ' + NAME); //doesn't execute
console.log('Good Evening, ' + NAME); //doesn't execute

/*LS
The program first greets Victor 3 times. It then encounters an error on line 6, which prevents it from greeting Joe. The problem is that constants are, well, constant. You can't reassign a constant after defining it. You must use regular (let or var) variables instead:
*/
