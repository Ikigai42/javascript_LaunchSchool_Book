let myProtoObj = {
  foo: 1,
  bar: 2,
};

//New object with myProtoObj as prototype
let myObj = Object.create(myProtoObj);

myObj['qux'] = 3;

console.log(myObj);
console.log(myProtoObj);

let objKeys = Object.keys(myObj);
//Iterates only over child object keys
objKeys.forEach(function (key) {
  console.log(key);
});

//Iterates over ALL keys child and it's prototype's (myProtoObj) keys
for (let key in myObj) {
  console.log(key);
}

//Add conditional to log only myObj's properties
for (let key in myObj) {
  if (myObj.hasOwnProperty(key)) {
    console.log(key);
  }
}
