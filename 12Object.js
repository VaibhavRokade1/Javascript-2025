// singleton

// Object

// console.log(myObj);
// console.log(myObj.name);

// console.log(typeof myObj[mySym]);

// myObj.name = "Rokade";

// Object.freeze(myObj);

// myObj.name = "Vikas";

// console.log(myObj);

const mySym = Symbol("Hello");

const myObj = {
  name: "Vaibhav",
  [mySym]: "kay1",
  age: 22,
  isLoggedin: true,
};

//  add funoctions in the object in javascript

myObj.greating = function () {
  console.log(`Hey , ${this.name} What are you Doing.`);
};

// console.log(myObj.greating());
