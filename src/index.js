const gameForm = document.querySelector("#gameForm");
const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const resultBox = document.querySelector("#resultBox");

let resultExist = false;
gameForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const maxNumber = input1.value;
  const chosenNumber = Math.round(Math.random() * maxNumber);
  const guessNumber = Number(input2.value);
  const strong = document.createElement("strong");
  const br = document.createElement("br");
  const result1 = document.createElement("span");
  const result2 = document.createElement("span");
  if (resultExist === false) {
    result1.id = "result1";
    result1.innerHTML = `You chose: ${guessNumber}, the machine chose: ${chosenNumber}`;
    if (guessNumber === chosenNumber) {
      result2.id = "result2";
      result2.innerText = "You won!";
    } else {
      result2.id = "result2";
      result2.innerText = "You lost!";
    }
    resultBox.appendChild(result1);
    strong.appendChild(result2);
    resultBox.appendChild(br);
    resultBox.appendChild(strong);
    resultExist = true;
  } else {
    const resultExist1 = document.querySelector("#result1");
    const resultExist2 = document.querySelector("#result2");
    resultExist1.innerHTML = `You chose: ${guessNumber}, the machine chose: ${chosenNumber}`;
    guessNumber === chosenNumber
      ? (resultExist2.innerText = "You won!")
      : (resultExist2.innerText = "You lost!");
  }
});
