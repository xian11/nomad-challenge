const rangeNumber = document.querySelector(".range-form input");
const guessNumber = document.querySelector(".guess-form input");
const playBtn = document.querySelector(".result button");
const chosenNumber = document.querySelector(".chose")
const gameResult = document.querySelector(".final-result")

function clickButton() {
  const rangeNumberValue = parseInt(rangeNumber.value);
  const guessNumberValue = parseInt(guessNumber.value);
  const randomNumber = parseInt(Math.floor(Math.random() * (rangeNumberValue+1)));

  if (guessNumberValue <= rangeNumberValue){
    chosenNumber.innerText = `you chose: ${guessNumberValue}, the machine chose: ${randomNumber}`
  
    if (randomNumber === guessNumberValue) {
      gameResult.innerText = "You Won!"
    } 
    else {
      gameResult.innerText = "You lost!"
    }
  }else {
    alert("추측한 숫자는 범위보다 작아야 합니다")
  }
}
playBtn.addEventListener("click",clickButton)