const btn = document.querySelector(".start-btn");
const timerStartStop = document.querySelector(".timer");
const timer = document.querySelector(".time");
const changeBtn = document.querySelector(".change-page");
const timerSetup = document.querySelector(".timer-setup");
const editTime = document.querySelectorAll(".time-edit-btn");
const sessionTimeEdit = document.querySelector(".session");
const breakTimeEdit = document.querySelector(".break");
let forSession = document.getElementById("forSession").value;
let forBreak = document.getElementById("forBreak").value;
let second = 58;
let minute = 0;
let check = 0;
let sessionTime = 25;
let breakTime = 5;
let intervalId;

btn.addEventListener("click", () => {
  btn.classList.remove("animate");
  // Force browser to reflow
  void btn.offsetWidth;
  btn.classList.add("animate");
  second = 0;
  minute = 0;
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

changeBtn.addEventListener("click", () => {
  changeBtn.classList.remove("animate");
  // Force browser to reflow
  void changeBtn.offsetWidth;
  changeBtn.classList.add("animate");
  // timerSetup.style.visibility="visible"
  timerSetup.classList.toggle("visiblee");
});
document.querySelectorAll(".edit").forEach((e) => {
  e.addEventListener("click", (el) => {
    if (forSession == "on" && forBreak!="true") {
        e.style.backgroundColor = "aqua";
        e.style.color = "black";
        forSession= "true";
    } 
    else {
      e.style.color = "white";
      e.style.backgroundColor = "black";
      forSession= "on";
    }
    if (forBreak == "on" && forSession!="true") {
       
        e.style.backgroundColor = "aqua";
        e.style.color = "black";
        
        forBreak= "true";
      
    } 
    else {
      e.style.color = "white";
      e.style.backgroundColor = "black";
      forBreak= "on";
    }
  });
});
editTime.forEach((e) => {
  e.addEventListener("click", (el) => {
    // console.log(el.target.classList);
    if (forSession == "true") {
      sessionTime++;
      sessionTimeEdit.children[1].innerHTML = `${sessionTime} min`;
    }
    if (forBreak == "true") {
      breakTime++;
      breakTimeEdit.children[1].innerHTML = `${breakTime} min`;
    }

  });
});
