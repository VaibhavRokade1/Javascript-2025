// turety or falsy values

const massage = [];

if (massage) {
  //   console.log("Massage is according to  : truety values");
} else {
  //   console.log("Massage is according to  : falsey values");
}

// falsey values

// false , 0 , -0 , 0n , "" , [] , null ,undefind , null , NaN

//Truthy value
// true  1 , "0", 'false' , function(){} , {}

const emptyObject = {};

if (Object.keys(emptyObject).length === 0) {
  //   console.log("Object is empty");
}

// nullish coalescing operator ?? : null , undefind

const chai = 23 ?? 73;
const chai1 = null ?? 90;
const chai2 = undefined ?? 73;

console.log(chai);
console.log(chai1);
console.log(chai2);

// tarnary operator

// condition ? true : false;

// 1 == true ? console.log("True") : console.log("False");
