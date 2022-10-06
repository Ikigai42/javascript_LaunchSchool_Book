//4. Create an array from the keys of the object obj below, with all of the keys converted to uppercase. Your implementation must not mutate obj.

let obj = {
  b: 2,
  a: 1,
  c: 3,
};

//Create a new object
let newObj = Object.assign({}, obj);
//Extract object keys into an array
let newObjKeys = Object.keys(newObj);
console.log(newObjKeys);

//for loop
let keysArr = [];
for (let i = 0; i < newObjKeys.length; i += 1) {
  keysArr.push(newObjKeys[i].toUpperCase());
  console.log(`for loop: ${keysArr}`);
}
console.log('for loop 👇');
console.log(keysArr);

//map()
console.log('map() 👇');
console.log(newObjKeys.map((value) => value.toUpperCase()));

//forEach()
let upperCaseKeys = [];
newObjKeys.forEach((key) => upperCaseKeys.push(key.toUpperCase()));
console.log('forEach() 👇');
console.log(upperCaseKeys);
//Original Object
console.log(obj);

/*LS
The challenge of this exercise is to figure out how to iterate through the properties of obj. We showed two ways in this chapter: for/in with hasOwnProperty() and Object.keys(). The former involves a bit more work, so we use Object.keys() combined with map() to extract and uppercase the keys into an array.
*/
