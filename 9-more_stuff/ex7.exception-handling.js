//7. What is exception handling and what problem does it solve?

//exception handling raises an error when there is an error in the syntax/program that prevents the code from executing. It helps give context and prints a stack trace of where that happens in the code, giving us the row/column location so that we can debug it.

try {
  // perform an operation that may produce an error
} catch (exception) {
  // an error occurred. do something about it.
  // for example, log the error
} finally {
  // Optional 'finally' block; not used often
  // Executes regardless of whether an exception occurs.
}

/*LS
Exception handling is a process that deals with errors in a manageable and predictable manner. It uses the try/catch statement to catch exceptions that the code in the try block raises, and lets the programmer deal with the problem in a way that makes sense and perhaps prevents a catastrophic failure or nasty bug.
*/
