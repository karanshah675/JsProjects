const btn = document.querySelector(".start-btn");
const timerStartStop = document.querySelector(".timer");
const timer = document.querySelector(".time");
const changeBtn = document.querySelector(".change-page");
const timerSetup = document.querySelector(".timer-setup");
const editTime = document.querySelectorAll(".time-edit-btn");
const sessionTimeEdit = document.querySelector(".session");
const breakTimeEdit = document.querySelector(".break");
const currentSession = document.createElement("p");
currentSession.innerHTML = "Session 1";
currentSession.classList.add("session-banner");
let forBreak = false;
let forSession = false;
let second = 58;
let minute = 24;
// let check = 0;
let sessionTime = 25;
let breakTime = 5;
let intervalId;
let sessionCount = 1;
let breakCount = 1;
btn.addEventListener("click", () => {
  btn.classList.remove("animate");
  // Force browser to reflow
  void btn.offsetWidth;
  btn.classList.add("animate");
  second = 0;
  minute = 0;
  sessionTime = 25;
  breakTime = 5;
  sessionCount = 1;
  breakCount = 0;
  sessionTimeEdit.children[1].innerHTML = `${sessionTime} min`;
  breakTimeEdit.children[1].innerHTML = `${breakTime} min`;
  timer.innerHTML = `${String(minute).padStart(2, "0")} <p class="blink">:</p> ${String(second).padStart(2, "0")}`;
});
timerStartStop.addEventListener("click", (e) => {
  if (!intervalId) {
    intervalId = setInterval(() => {
      if (
        currentSession.innerHTML.includes("Session") &&
        minute == sessionTime
      ) {
        currentSession.innerHTML = "Break " + breakCount++;
        minute = 0;
        second = 0;
      } else if (
        currentSession.innerHTML.includes("Break") &&
        minute == breakTime
      ) {
        currentSession.innerHTML = "Session " + sessionCount++;
        minute = 0;
        second = 0;
      }
      timer.before(currentSession);
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
    intervalId = 0;
    check = 0;
  }
});

changeBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  changeBtn.classList.remove("animate");
  // Force browser to reflow
  void changeBtn.offsetWidth;
  changeBtn.classList.add("animate");
  // timerSetup.style.visibility="visible"
  timerSetup.classList.toggle("visiblee");
});
document.querySelectorAll(".edit").forEach((e) => {
  e.addEventListener("click", (el) => {
    if (e.classList.contains("break") && forSession == false) {
      forBreak = true;
      e.classList.toggle("clicked");
    } else if (e.classList.contains("break") && forSession == true) {
      forBreak = true;
      forSession = false;
      sessionTimeEdit.classList.toggle("clicked");
      e.classList.toggle("clicked");
    } else if (e.classList.contains("session") && forBreak == false) {
      forSession = true;
      e.classList.toggle("clicked");
    } else {
      forSession = true;
      forBreak = false;
      breakTimeEdit.classList.toggle("clicked");
      e.classList.toggle("clicked");
    }
  });
});
editTime.forEach((e) => {
  e.addEventListener("click", (el) => {
    // console.log(el.target.classList);
    if (forSession == true) {
      if (e.innerHTML == "+") {
        if (sessionTime < 59) sessionTime++;
      } else if (sessionTime == breakTime) {
        alert("Session and Break time can not be same");
        sessionTime = 25;
        sessionTimeEdit.children[1].innerHTML = `${sessionTime} min`;

        return;
      } else {
        if (sessionTime > 0) sessionTime--;
      }

      sessionTimeEdit.children[1].innerHTML = `${sessionTime} min`;
    }
    if (forBreak == true) {
      if (e.innerHTML == "+") {
        if (breakTime < 15) breakTime++;
      } else if (sessionTime == breakTime) {
        alert("Session and Break time can not be same");
        breakTime = 5;
        breakTimeEdit.children[1].innerHTML = `${breakTime} min`;
        return;
      } else {
        if (breakTime > 0) breakTime--;
      }
      breakTimeEdit.children[1].innerHTML = `${breakTime} min`;
    }
  });
});
