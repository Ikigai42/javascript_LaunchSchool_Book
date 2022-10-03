//4. What does the following code log to the console, and why?

function barCodeScanner(serial) {
  switch (
    serial //serial argument passed into function body
  ) {
    case '123':
      console.log('Product1');
    //no break statement;
    case '113':
      console.log('Product2');
    //no break statement;
    case '142':
      console.log('Product3');
    //no break statement;
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113'); //passes the string value '113' into the function
// logs 'Product2'
// logs 'Product3' since there isn't a break statement
// logs 'Product not found!' since there isn't a break statement and control falls through

/*LS
Since the case clauses of the switch statement lack break statements, control falls through from the matching case '113' clause and executes the code in the case '142' and default clauses as well. JavaScript doesn't care that the criteria for extra case clauses don't match our serial value. This fall-through behavior is often undesirable. To avoid it, you must add break statements to each case clause:

function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
      break;
    case '113':
      console.log('Product2');
      break;
    case '142':
      console.log('Product3');
      break;
    default:
      console.log('Product not found!');
  }
}
*/
