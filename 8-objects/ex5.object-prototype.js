let myProtoObj = {
  foo: 1,
  bar: 2,
};

//New object with myProtoObj as prototype
let myObj = Object.create(myProtoObj);
