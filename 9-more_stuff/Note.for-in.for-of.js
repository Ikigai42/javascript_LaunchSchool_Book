let arrayObj = [42, "'42'", "'string'"];

console.log(`Index|Value pairs in the arrayObj object example for/in loop:`);
//For/in loop iterates over INDEX values of arrays & KEY values of an object INCLUDING it's prototype!
for (const index in arrayObj) {
  console.log(`@index: ${index} | value: ${arrayObj[index]}`);
}

let objectEx = {
  theNumKey: 42,
  anythingStrKey: "'42'",
  aStringKey: "'string'",
};

console.log(`Key: Value pairs in the objectEx object example for/in loop:`);
//For/in loop iterates over INDEX values of arrays & KEY values of an object INCLUDING it's prototype!
for (const key in objectEx) {
  //Prevents protoype's keys from being logged
  if (Object.hasOwnProperty.call(objectEx, key)) {
    const property = objectEx[key];
    console.log(` ${key}: ${property}`);
  }
}

console.log(`Values of the arrayObj object example for/of loop:`);
//For/of loop interates over & returning the object's VALUES from Array object literals & String literals
for (const value of arrayObj) {
  console.log(`Value in arrayObj: ${value}`);
}

let aString = '42 is your wings';

console.log(
  'Character values from for/of loop that iterates over a string literal value: '
);
//For/of loop iterating over and returning the strings's Character Values from Object literals
for (const char of aString) {
  console.log(char);
}
