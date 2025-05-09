// Singaleton Object
// like

// const obj = new Object();

// obj.id = 786324;
// obj.name = "Vaibhav Rokade";
// obj.isLoggedin = true || false;

// console.log(obj);

// const regularUser = {
//   email: "rokadevaibhav04@gmail.com",
//   fullname: {
//     firstName: "Vaibhav",
//     middleName: "Bandu",
//     lastName: "Rokade",
//   },
// };

// console.log(regularUser.fullname.firstName);
// console.log(regularUser.fullname.middleName);
// console.log(regularUser.fullname.lastName);

//======================= Combination of Objects = =======================

// const obj1 = { 1: "A", 2: "B" };
// const obj2 = { 3: "A", 4: "B" };

// console.log(obj1 + obj2); / => [object] [object]

// const obj3 = Object.assign(obj1, obj2);

// console.log(obj3);

const regularUser = {
  email: "rokadevaibhav04@gmail.com",
  fullname: {
    firstName: "Vaibhav",
    middleName: "Bandu",
    lastName: "Rokade",
  },
};

// console.log(Object.keys(regularUser));
// console.log(Object.values(regularUser));
// console.log(Object.entries(regularUser));

//  object Distructure

const myObject = {
  name: "Vaibhav Rokade",
  email: "rokade04@gmail.com",
  course: ".net fullstack developer",
  coursePrice: 20000,
};

const { coursePrice: CP } = myObject;

console.log(CP);
