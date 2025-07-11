const users = {
  name: "Rokade Vaibhav",
  eamil: "rokade04@gmail.com",
  password: "Vaibhav@145",
  phone: 7387539006,
  tel: "3443-3453-6677",
  city: "Pune",
  pinCode: 414502,

  hobbies: ["playing criket", "Singing"],
  achivements: [
    {
      achivementName: "Football",
      year: 1988,
      roll: "team Captan",
      rank: "2nd",
    },
    {
      achivementName: "Football",
      year: 1988,
      roll: "team Captan",
      rank: "2nd",
    },
    {
      achivementName: "Criket",
      year: 1988,
      roll: "team Captan",
      rank: "1st",
    },
  ],
  dob: "MQURP403M",
  adhar: 798153494311,
  images: [
    "https://imgs.search.brave.com/PbP-i7JPm_l0xMY7yTPH43SEO8LHXnfD_iiiRfaxNWE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9ncmF2/YXRhci5jb20vaW1h/Z2VzL2hvbWVwYWdl/L2F2YXRhci0wMS5w/bmc",
    "image2.jpg",
  ],
  jobDes: {
    role: "Fullsatck Developer",
    packege: 120000,
    workEmail: "rokadevaibhav04@gmail.com",
    workAddress: "At post : Deotakli",
  },
};

const showData = () => {
  document.getElementsByTagName("h2")[0].innerText = users.name;
  document.getElementsByTagName("p")[0].innerText = users.jobDes.role;
  document.getElementsByTagName("p")[1].innerText = users.city;

  document.getElementsByTagName("img")[0].src = users.images[0];
  document.getElementsByTagName("li")[0].innerHTML += users.name;
  document.getElementsByTagName("li")[1].innerHTML += users.eamil;
  document.getElementsByTagName("li")[2].innerHTML += users.phone;
  document.getElementsByTagName("li")[3].innerHTML += users.adhar;
  document.getElementsByTagName("li")[4].innerHTML += users.city;

  for (let i = 0; i < users.hobbies.length; i++) {
    document.getElementsByTagName(
      "ul"
    )[1].innerHTML += `<li>${users.hobbies[i]} </li>`;
  }

  for (let i = 0; i < users.achivements.length; i++) {
    document.getElementsByTagName("ol")[0].innerHTML += `<li>
            Name :${users.achivements[i].achivementName} <br />
            Rank : ${users.achivements[i].rank} <br />
            Year :  ${users.achivements[i].year} <br />
            Roll : ${users.achivements[i].roll}
            <br />
            <br />
          </li>`;
  }
};
