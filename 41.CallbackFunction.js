// Callback Function

const AllUserDetails = (data) => {
  console.log(`Hi i am ${data().name} and my Age is : ${data().age}`);
};

const Details = () => {
  const name = "Vaibhav Rokade";
  const age = 21;
  let data = { name, age };
  return data;
};

AllUserDetails(Details);

// Function chya aat function call hote tyalach callback
