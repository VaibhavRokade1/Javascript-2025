// This in arrow function

// const User = {
//   userName: "Vaibhav Rokade",
//   email: "rokadevaibhav04@gmail.com",
//   mydata: function () {
//     console.log(`Hey ${this.userName}`);
//   },
// };

// User.mydata();
// User.userName = "Vikas Pathade";
// User.mydata();

// console.log(this);   ==== > node.js document referece to the {}

// This keyword is not working in plain function
// ex :
// function Chai() {
//   console.log(this);
// }
// Chai();

const myFun = () => {
  return 6 + 5;
};

console.log(myFun());
