function isNotANumber(value) {
  return value !== value;
}

console.log(isNotANumber(42));
console.log(isNotANumber(NaN));

/*LS
This works since NaN is the only JS value that is not === to itself.
 */
