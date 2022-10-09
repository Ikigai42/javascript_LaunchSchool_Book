function isNegativeZero(value) {
  if (value === -Infinity) {
    return false;
  } else if (1 / value === -Infinity) {
    return true;
  } else {
    return false;
  }
}

console.log(isNegativeZero(Infinity)); // false
console.log(isNegativeZero(-Infinity)); // false
console.log(isNegativeZero(0)); // false
console.log(isNegativeZero(42)); // false
console.log(isNegativeZero('42')); // false
console.log(isNegativeZero(-0)); // true
console.log(1 / -Infinity === -0);

/*LS
function isNegativeZero(value) {
  return 1 / value === -Infinity;
}

This works since 1 / 0 returns Infinity and 1 / -0 returns -Infinity, thus letting us make the distinction. You can divide any other number except 0 or -0 to achieve the same result.

You can be a little more explicit with your answer as well:
While this is a little more complex, it clearly shows that we're only interested in numbers that are 0 (or -0), which also helps eliminate unwanted division operations, which may be needed for performance reasons.
 */
function isNegativeZero2(value) {
  return value === 0 && 1 / value === -Infinity;
}

console.log(isNegativeZero2(-Infinity)); // false
console.log(isNegativeZero2(-0)); // true
