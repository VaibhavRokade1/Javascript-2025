// Scope ( Local Scope  , Golable Scope)

// if (true) {
//   let a = 10;
//   const b = 20;
//   var c = 30;
// }

// Printing State
// console.log(a);
// console.log(b);
// console.log(c); var is not working at block level scope

// if (true) {
//   const userName = "Vaibhav";
//   if (userName === "Vaibhav") {
//     const tech = "Javascript";
//     console.log(userName);
//   }
//   //   console.log(tech);
// }

// function one() {
//   console.log("Hello World");
//   function two() {
//     console.log("Hay , Vaibhav");
//   }
//   two();
// }
// one();

// ++++++++++++++++++ Intreasting +++++++++++++++++++++++

// function dicleration type

function mynew() {
  console.log("Hello World");
}
// mynew();

const mytest = function () {
  console.log("Hello World");
};

// mytest();
