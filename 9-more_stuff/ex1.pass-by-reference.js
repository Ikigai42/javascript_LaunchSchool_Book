let array1 = [1, 2, 3]; //declares array1 variable and initializes it to an array object
let array2 = array1; //declaraes array2 variable and points it to the reference of the array1 array object
array1[1] = 4; //reassigns the value indexed at index 1 of the array to the number value 4
console.log(array2); // Logs the array object => [1, 4, 3]
console.log(array1); // Logs the same reference of the array object => [1, 4, 3]
