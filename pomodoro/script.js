const btn = document.querySelector(".start-btn");
const timerStartStop = document.querySelector(".timer");
const timer = document.querySelector(".time");
const changeBtn = document.querySelector(".change-page")
const timerSetup =document.querySelector(".timer-setup")
let second = 58;
let minute = 0;
let check = 0;
let intervalId;
 
btn.addEventListener("click", () => {
  btn.classList.remove("animate");

  // Force browser to reflow
  void btn.offsetWidth;
  btn.classList.add("animate");
});
timerStartStop.addEventListener("click", (e) => {
  if (!check) {
    intervalId = setInterval(() => {
      check = 1;
      timer.innerHTML = `${String(minute).padStart(2, "0")} <p class="blink">:</p> ${String(second).padStart(2, "0")}`;
      second++;
      if (second > 59) {
        minute++;
        second = 0;
      }
    }, 1000);
  } else {
    clearInterval(intervalId);
    check = 0;
  }
});
changeBtn.addEventListener("click",()=>{
        timerSetup.style.opecity=1
})