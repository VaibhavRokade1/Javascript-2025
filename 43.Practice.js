// Practice

console.log("Hi");

const myIntervel = setInterval(() => {
  console.log("Hi");
}, 2000);

setTimeout(() => {
  clearInterval(myIntervel);
}, 5000);
console.log("You");
