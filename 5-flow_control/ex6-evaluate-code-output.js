//6. What does this code output to the console?

function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]); //passing an empty array literal intro the isArrayEmpty() function as an argument

//logs 'Not Empty' since [] evaluates to a truthy value

/*LS
The output is Not Empty since, while the array is empty -- it has no elements and the length property is 0 -- it isn't falsy. Thus, JavaScript executes the first branch of the if statement. */
