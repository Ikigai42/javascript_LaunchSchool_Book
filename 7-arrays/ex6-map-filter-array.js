function oddLengths(array) {
  let valLength = array.map((value) => value.length);
  let oddsVal = valLength.filter((value) => value % 2 !== 0);

  return oddsVal;
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab', '42 '];
console.log(oddLengths(arr)); // => [1, 5, 3, 3]

/*LS
function oddLengths(strings) {
  let lengths = strings.map((letters) => letters.length);
  let oddLengths = lengths.filter((number) => number % 2 === 1);
  return oddLengths;
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr));

*/
