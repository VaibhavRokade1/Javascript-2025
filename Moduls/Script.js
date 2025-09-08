import { AllStudent } from "./Student.js";
import { fruits } from "./Friuts.js";

fruits.forEach((fruit) => {
  document.querySelector("body").innerHTML += `<h1>${fruit}</h1>`;
});

AllStudent().then((res) => console.log(res));
