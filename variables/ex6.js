/*
6. Will this program produce an error when run? Why or why not?

const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

Book
 this program doesn't raise an error, and it logs bar on line 6. One key difference, though, is that we are using const instead of let, which may have led you to believe an error would occur on line 3. However, since the two const variables are separate entities, no error occurs.
*/
console.log(`Will this program produce an error when run? Why or why not?
const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

No error will be produced because the constant FOO is declared in different scopes & logs the String value "bar". 
`)
const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);
