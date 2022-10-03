//1. What values do the following expressions evaluate to?

false || (true && false); // left operand false | right operand false => expression evaluates to false
true || 1 + 2; // left operand true => short circuits & evaluates to true
1 + 2 || true; // left operand 3: truthy => short circuits returns 3
true && 1 + 2; // left operand true | right operand 3 is truthy => returns 3
false && 1 + 2; // left operand false => short circuits evaluating to false
1 + 2 && true; // left operand 3 is truthy | right operand is true => evaluates to true
32 * 4 >= 129; // left operand 128 is truthy less than right operand 129 => evaluates to false
false !== !true; // left operand is false | right operand becomes false => evaluates to false
true === 4; // left operand is true is not equal to number value 4 => evaluates to false
false === (847 === '847'); // left operand false | right operand evaluates to false => evaluates to true
false === (847 == '847'); //left operand false | right operand uses loose equality operator & evaluates to true => expression evaluates to false

//false     !(true)=>false           true
!true || !(100 / 5) === 20 || 328 / 4 === 82 || false; //left operand true | right operand false => evaluates to true

//VOCAB: Paranthetical division operation => (328 / 4)

//parenthetical: adjective; using, containing, or within parentheses | noun; a word or phrase within parentheses.
