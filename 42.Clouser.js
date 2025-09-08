// Clouser

// const outer = () => {
//   let user = 0;
//   const inner = () => {
//     user++;
//     console.log(user);
//   };
//   inner();
// };

// outer();

function outer() {
  let user = 0;
  return function () {
    user++;
    console.log(user);
  };
}

outer();
