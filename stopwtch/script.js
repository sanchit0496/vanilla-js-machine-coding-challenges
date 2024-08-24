const form = document.getElementById("main-div");
const startBtn = document.getElementById("start-btn");
const resetBtn = document.getElementById("reset-btn");

const timer = document.getElementById("timer");
const timerHour = document.getElementById("timer-hour");
const timerMin = document.getElementById("timer-min");
const timerSec = document.getElementById("timer-sec");

let sec = 0
let inte = null

const resetStopwatch = () => {
  timerHour.textContent = "00";
  timerMin.textContent = "00";
  timerSec.textContent = "00";

  timerHour.style.color = "gray";
  timerMin.style.color = "gray";
  timerSec.style.color = "gray";
};

window.addEventListener('load', () => resetStopwatch())

startBtn.addEventListener('click', () => {
  startBtn.style.pointerEvents = 'none'
  inte = setInterval(() => {
    sec++;
    console.log(sec)

    let minDisplay = Math.floor(sec / 60);
    let hourDisplay = Math.floor(sec / 3600);
    let secDisplay = sec - 60 * minDisplay;

    timerHour.textContent = hourDisplay.toString().padStart(2, "0");
    timerMin.textContent = minDisplay.toString().padStart(2, "0");
    timerSec.textContent = secDisplay.toString().padStart(2, "0");
  }, 1000);
})

resetBtn.addEventListener('click', () => {
  startBtn.style.pointerEvents = 'auto'

  clearInterval(inte)
  sec = 0
  resetStopwatch()
})