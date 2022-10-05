/*6. Reimplement the factorial function from exercise 2 using recursion. Once again, you may assume that the argument is always a positive integer.

function factorial(nNum) {
  let result = 1;
  for (let currentNum = nNum; currentNum >= 1; currentNum -= 1) {
    result = result * currentNum;
  }

  return result;
}

console.log(factorial(1)); // => 1
console.log(factorial(2)); // 2 * 1 => 2
console.log(factorial(3)); // 3 * 2 * 1 => 6
console.log(factorial(4)); // 4 * 3 * 2 * 1 => 24
console.log(factorial(5)); // 5 * 4 * 3 * 2 * 1 => 120
console.log(factorial(6)); // 6 * 5 * 4 * 3 * 2 * 1 => 720
console.log(factorial(7)); // 7 * 6 * 5 * 4 * 3 * 2 * 1 => 5040
console.log(factorial(8)); // 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1 => 40320
*/

function factorial(number) {
  //base case
  if (number === 1) {
    return 1;
  }
  //Multiply n by n - 1;
  return number * factorial(number - 1);
}

//Test Cases
console.log(factorial(1)); // => 1
console.log(factorial(2)); // => 2
console.log(factorial(3)); // => 6
console.log(factorial(4)); // => 24
console.log(factorial(5)); // => 120
console.log(factorial(6)); // => 720
console.log(factorial(7)); // => 5040
console.log(factorial(8)); // => 40320
