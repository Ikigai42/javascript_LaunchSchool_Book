/*
4. Use the times function shown below to write a program that logs the value of 1! (one factorial), 2! (two factorial), 3!, 4!, and 5! (five factorial) to the console.

n!  |Expansion	        |Result
1!	 1	                 1
2!	 1 * 2	             2
3!	 1 * 2 * 3	         6
4!	 1 * 2 * 3 * 4	     24
5!	 1 * 2 * 3 * 4 * 5	 120

function times(number1, number2) {
  let result = number1 * number2;
  console.log(result);
  return result;
}

SOLUTION 1
let oneFactorial = times(1, 1);
let twoFactorial = times(2, oneFactorial);
let threeFactorial = times(3, twoFactorial);
let fourFactorial = times(4, threeFactorial);
let fiveFactorial = times(5, fourFactorial);

SOLUTION 2
times(times(times(times(times(1, 1), 2), 3), 4), 5);

*/

function times(number1 = 1, number2 = 1, number3 = 1, number4 = 1, number5 = 1) {
  let result = number1 * number2 * number3 * number4 * number5;
  console.log(result);
  return result;
}

times(1);
times(1, 2);
times(1,2,3);
times(1,2,3,4);
times(1,2,3,4,5);