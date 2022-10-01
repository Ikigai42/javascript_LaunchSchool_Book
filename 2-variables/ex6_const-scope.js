/*
6. Will this program produce an error when run? Why or why not?
*/

const FOO = 'bar'; //initializes the constant variable name FOO to the string value 'bar' in an outer scope
{
  //enters inner scope at {
  const FOO = 'qux'; //declares a different constant variable from the previous FOO in the outer scope & initializes it to the string variable 'qux'
} //exits inner scope at }
console.log(FOO); //logs the current value of FOO from the outer scope > 'bar'

/*LS
For much the same reason as the previous exercise, this program doesn't raise an error, and it logs bar on line 10. One key difference, though, is that we are using const instead of let, which may have led you to believe an error would occur on line 8. However, since the two const variables are separate entities, no error occurs.
*/
