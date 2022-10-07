// 11. Write some code to replace the value 6 in the following object with 606:

let obj = {
  foo: { a: 'hello', b: 'world' },
  bar: ['example', 'mem', null, { xyz: 6 }, 88],
  qux: [4, 8, 12],
};

//accessing nested value inside larger complex data object with dot notation reassigning the value 6 to the number value 606
obj.bar[3].xyz = 606;

//doing the same reassignment with brackets
obj['bar'][3]['xyz'] = 606;

console.log(obj.bar[3]['xyz']);
console.log(obj);
