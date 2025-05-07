// Array can store mulitiple values in one variable
// Javascript array are resizable

const array = [1, 2, 3, 4, 5];

// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);
// console.log(array[3]);
// console.log(array[4]);

const Arr = new Array(1, 2, 3, 4, 5);

// console.log(Arr[0]);

// Arr.push(6);
// Arr.pop(); // remove last array value of the array

// Arr.unshift(0); // Add new value starting of the array
// Arr.shift(); // Delete first value of the array

// console.log(Arr.indexOf(3));
// console.log(Arr.includes(3));

let Arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log("Array Arr1 : \n", Arr1);
// console.log("Array slice : \n", Arr1.slice(2, 5)); // 2nd elements last value is not include
// console.log("Array Arr1 : \n", Arr1);

console.log("Array Arr1 : \n", Arr1);
console.log("Array splice : \n", Arr1.splice(2, 5)); // 2nd elements last value is include but splice can return sub array of the actual array
console.log("Array Arr1 : \n", Arr1);

//   output
// Array Arr1 :
//  [
//   1, 2, 3, 4,  5,
//   6, 7, 8, 9, 10
// ]
// Array splice :
//  [ 3, 4, 5, 6, 7 ]
// Array Arr1 :
//  [ 1, 2, 8, 9, 10 ]
