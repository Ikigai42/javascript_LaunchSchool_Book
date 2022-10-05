function oddLengths(stringsArr) {
  return stringsArr.reduce((oddStringsLengthArr, currentVal) => {
    if (currentVal.length % 2 === 1) {
      oddStringsLengthArr.push(currentVal.length);
    }
    return oddStringsLengthArr;
  }, (initialVal = []));
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab', '42 '];
console.log(oddLengths(arr)); // => [1, 5, 3, 3]

/*LS
function oddLengths(strings) {
  return strings.reduce((filteredNumbersArray, letters) => {
    let length = letters.length;
    if (length % 2 === 1) {
      filteredNumbersArray.push(length);
    }

    return filteredNumbersArray;
  }, []);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr));
*/
