/**
 * 8. Write a function that logs whether a number is between 0 and 50 (inclusive), between 51 and 100 (inclusive), greater than 100, or less than 0.
 */

function numberRange(num) {
  if (Number.isNaN(num)) {
    console.log(`${num} is not a valid number`);
  }

  if (num < 0) {
    console.log(`${num} is less than 0`);
  } else if (num >= 0 && num <= 50) {
    console.log(`${num} is between 0 and 50`);
  } else if (num >= 51 && num <= 100) {
    console.log(`${num} is between 51 and 100`);
  } else if (num > 100) {
    console.log(`${num} is greater than 100`);
  }
}

numberRange(-1);
numberRange(-0);
numberRange(0);
numberRange(42);
numberRange(50);
numberRange(51);
numberRange(100);
numberRange(101);

/*
switch (num) {
  case num < 0:
    console.log(`${num} is less than 0`);
    break;
  case num >= 0 && num <= 50:
    console.log(`${num} is between 0 and 50`);
    break;
  case num >= 51 && num <= 100:
    console.log(`${num} is between 51 and 100`);
    break;
  default:
    console.log(`${num} is greater than 100`);
    break;
}
*/
