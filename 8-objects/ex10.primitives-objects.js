// 10. How many primitive values are there in the following expression? Identify them. How many objects are there in the expression? Identify those objects.

[1, 2, ['a', ['b', false]], null, {}];
/*
objects => 4 objects
[1, 2, ["a", ["b", false]], null, {}] > array object 
["a", ["b", false]] > nested array object 1 level deep
["b", false] > nested array object 2 levels deep
{} > nested object literal 1 level deep

primitives => 6
1 > number literal
2 > number literal
"a" > string literal 
"b" > string literal
false > boolean literal
null > null literal
*/
