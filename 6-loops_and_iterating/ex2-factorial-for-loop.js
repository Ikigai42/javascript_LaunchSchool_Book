/*
2. Write a function that computes and returns the factorial of a number by using a for loop. The factorial of a positive integer n, signified by n!, is defined as the product of all integers between 1 and n, inclusive:
*/

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

/*LS
function factorial(number) {
  let result = 1;
  for (let counter = number; counter > 0; counter -= 1) {
    result *= counter;
  }

  return result;
}
*/
