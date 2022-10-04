//4. Does the following code produce an error? Why or why not? What output does this code send to the console?

for (let i = 0; i < 5 /*omitted optional increment expression */; ) {
  console.log((i += 1)); //Increment i in body of the for loop
}

//No it logs 1 => 2 => 3 => 4 => 5 to the console.
//i is initialized to 0 then is incremented by 1 and i is reassigned to 1 in the body of the for loop
//The loop continues until meeting the stopping condition i < 5 and exits the loop

/*LS
The code doesn't produce an error since all 3 components of the for loop are optional. In this code, we omit the "next value" component; however, this isn't a problem here since we increment the loop variable on line 2.

Although i is 0 on the first iteration, the loop logs 1 during that iteration since i += 1 increments i before console.log gets to log anything. i += 1 also returns the new value of i (1), and that's what gets passed to console.log. Similar actions occur on each iteration: the output is always 1 greater than the initial value of i, and i += 1 takes care of incrementing i to the next higher number, then passes that value to console.log.

Note that we use let in the initialization clause of the loop to create and initialize an index variable. We can also write:
*/
let i;
for (i = 0; i < 5; ) {
  console.log((i += 1));
}
/*
While these examples may seem identical at first glance - they both log the numbers 1 through 5 to the console - there is a subtle difference. In the first example, JavaScript limits the scope of the resulting variable to the for loop. Code outside of the loop can't access the value after the loop ends. In the latter example, using let before the loop creates a variable whose scope extends beyond the loop. In particular, code that appears after the loop can examine and use the value of the variable.

To avoid problems with name clashes, you should limit the scope of your variables to the smallest possible scope. As a result, some developers prefer to declare their index variable in the for initialization clause. However, the practice isn't universal; you'll understand why that is when you learn about the var statement.
*/
