/*
3. Let's improve our previous implementation of evenOrOdd. Add a validation check to ensure that the argument is an integer. If it isn't, the function should issue an error message and return.
*/

function evenOrOdd(number) {
  //Validation Logic
  if (!Number.isInteger(number)) {
    console.log('The argument value entered is not an Integer value');
    return;
  } else if (number % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

evenOrOdd('not a number'); // 'The argument value entered is not an Integer'
evenOrOdd(1); // 'odd'
evenOrOdd(42); // 'even'

/*LS
function evenOrOdd(number) {
  if (!Number.isInteger(number)) {
    console.log('Sorry, the value you passed is not an integer');
    return;
  }

  if (number % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}
*/
