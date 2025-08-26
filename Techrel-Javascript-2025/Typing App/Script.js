const sentences = [
  "The sun dipped below the horizon, painting the sky with orange hues.",
  "Technology is changing the way we connect with each other.",
  "A gentle breeze carried the scent of fresh flowers across the park.",
  "Learning new skills every day keeps the mind active and strong.",
];

// Random pragram Generation
let refPara = "";
const GeneratePara = () => {
  let paragraph = "";
  for (let i = 0; i < sentences.length; i++) {
    paragraph += sentences[Math.floor(Math.random() * sentences.length)];
  }
  refPara = paragraph;
};

let pTag = document.querySelector("p");
let reloadBtn = document.getElementById("reloadBtn");
reloadBtn.addEventListener("click", () => {
  GeneratePara();
  pTag.innerHTML = `<h3>${refPara.toLocaleLowerCase()}</h3>`;
});

// from ChatGPT----
// 1 minute in seconds
let timerInterval;
function startTimer() {
  let time = 3;
  clearInterval(timerInterval);
  timerInterval = setInterval(function () {
    console.log("");
    let min = Math.floor(time / 60);
    let sec = time % 60;
    document.getElementById("timer").innerText =
      min + ":" + (sec < 10 ? "0" : "") + sec;
    if (time > 0) time--;
  }, 1000);
}

let startTimers = document.querySelector("#Startbtn");
startTimers.addEventListener("click", () => {
  startTimer();
});

//----------------

startTimers.addEventListener("click", () => {
  document.querySelector("#Startbtn").addEventListener("click", () => {
    startTimer();
  });
  setTimeout(() => {
    clearInterval(timerInterval);
    let userInput = document.getElementById("UserInput").value || "";
    let GeneratedPara =
      document.getElementById("GeneratedPara").innerText || "";

    if (userInput != "" && GeneratedPara != "") {
      let allGeneratedParaArray = GeneratedPara.split("");
      let alluserInputArray = userInput.split("");

      let flag = 0;

      for (let i = 0; i < allGeneratedParaArray.length; i++) {
        if (allGeneratedParaArray[i] === alluserInputArray[i]) {
          if (alluserInputArray.length == allGeneratedParaArray.length) {
            flag = 1;
          }
        } else {
          break;
        }
      }

      if (flag) {
        alert("Pass Successfully...");
        document.getElementById("UserInput").value = "";
      } else {
        alert("Bhag Salye....!!!, Firse try kar");
        document.getElementById("UserInput").value = "";
      }
    } else {
      alert("write Samethings...");
    }
  }, 3000);
});
