//7. Use reduce to compute the sum of the squares of all of the numbers in an array:

function sumOfSquares(array) {
  return array.reduce((total, currentValue) => {
    return total + currentValue * currentValue;
  }, (initialValue = 0));
}

let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83

//If no initial value is passed in, reduce() uses the first index value as initial value so it would return 3 + 5 * 5 + 7 * 7 => 74
