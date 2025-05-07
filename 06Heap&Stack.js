// Stack

// All the primative types are stored in stack and the provide only copy of the variables
let userName = "Vaibhav Rokade";
let antheruser = userName;

antheruser = "Vikas pathade";

console.log(userName);
console.log(antheruser);

// Heap

// in the heap memory can change acctual refernce of the non primative datatypes

let obj1 = {
  name: "rokade@gmail.com",
};

let obj2 = obj1;

obj2.name = "vaibhav@gmail.com";

console.log(obj1.name);
console.log(obj2.name);
