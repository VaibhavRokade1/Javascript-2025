// function calculateCarPrice(...carPrice) {
//   return carPrice;
// }

// console.log(calculateCarPrice(200, 300, 400, 500));

const userObj = {
  name: "Vaibhav",
  age: 22,
  email: " rokadevaibhav04gmail.com",
};

// function Users() {
//   console.log(
//     `Hey ${userObj.name} Your Age is : ${userObj.age} and email : ${userObj.email}`
//   );
// }

// Users();

const Users = [
  {
    name: "Vaibhav",
    productName: "Buds",
    productPrice: 203,
  },
  {
    name: "Aditya",
    productName: "penbox",
    productPrice: 53,
  },
];

function productTotal() {
  return Users[0].productPrice + Users[1].productPrice;
}

console.log(productTotal());
