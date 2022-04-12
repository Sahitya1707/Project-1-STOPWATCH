let hr = "00";
let min = "00";
let sec = "00";
let msec = "00";
let pauseContent = "PAUSE";
let resumeContent = "RESUME";

const hour = document.querySelector(`.hour`);
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const milisecond = document.querySelector(".milisecond");
const start = document.querySelector(".start");
const pause = document.querySelector(".pause");
const reset = document.querySelector(".reset");
const otherBtns = document.querySelector(".otherbtns");
const lap = document.querySelector(".lap");
const lapTime = document.querySelector(".laptime");
const lapHour = document.querySelector(".laphr");
const lapMinute = document.querySelector(".lapmin");
const lapSecond = document.querySelector(".lapsec");
const lapMilisecond = document.querySelector(".lapmilisec");

let interval;
pause.innerText = pauseContent;
hour.innerHTML = hr;
minute.innerHTML = min;
second.innerHTML = sec;
milisecond.innerHTML = msec;

// for lap
lapHour.innerHTML = hr;
lapMinute.innerHTML = min;
lapSecond.innerHTML = sec;
lapMilisecond.innerHTML = msec;

function display() {
  msec++;
  if (msec <= 9) {
    milisecond.innerHTML = "0" + msec;
  }
  if (msec > 9) {
    milisecond.innerHTML = msec;
  }
  if (msec > 99) {
    sec++;
    second.innerHTML = "0" + sec;
    msec = 0;
    msec.innerHTML = "0" + msec;
  }
  if (sec > 9) {
    second.innerHTML = sec;
  }
  if (sec > 59) {
    min++;
    minute.innerHTML = "0" + min;
    sec = 0;
    second.innerHTML = "0" + sec;
  }
  if (min > 9) {
    minute.innerHTML = min;
  }
  if (min > 59) {
    hr++;
    hour.innerHTML = "0" + hr;
    min = 0;
    second.innerHTML = "0" + min;
  }
  if (hr > 9) {
    hour.innerHTML = hr;
  }
}

start.addEventListener("click", function () {
  interval = setInterval(display, 10);
  start.classList.add("hidden");
  otherBtns.classList.remove("hidden");
});
reset.addEventListener("click", function () {
  clearInterval(interval);
  otherBtns.classList.add("hidden");
  start.classList.remove("hidden");
  hr = "00";
  min = "00";
  sec = "00";
  msec = "00";
  pauseContent = "PAUSE";
  pause.innerText = pauseContent;
  hour.innerHTML = hr;
  minute.innerHTML = min;
  second.innerHTML = sec;
  milisecond.innerHTML = msec;

  // this for lap
  lapTime.classList.add("hidden");
  lapHour.innerHTML = hr;
  lapMinute.innerHTML = min;
  lapSecond.innerHTML = sec;
  lapMilisecond.innerHTML = msec;
});

pause.addEventListener("click", function () {
  if (pause.innerText === pauseContent) {
    pause.innerText = resumeContent;
    clearInterval(interval);
  } else if (pause.innerText === resumeContent) {
    interval = setInterval(display, 10);
    pause.innerText = pauseContent;
  }
});
lap.addEventListener("click", function () {
  lapTime.classList.remove("hidden");
  // for lapmsec
  if (msec <= 9) {
    lapMilisecond.innerHTML = "0" + msec;
  }
  if (msec === "00") {
    lapSecond.innerHTML = msec;
  }
  if (msec > 9) {
    lapMilisecond.innerHTML = msec;
  }
  // for lapsec
  if (sec <= 9) {
    lapSecond.innerHTML = "0" + sec;
  }
  if (sec === "00") {
    lapSecond.innerHTML = sec;
  }
  if (sec > 9) {
    lapSecond.innerHTML = sec;
  }
  // for lapmin
  if (min <= 9) {
    lapMinute.innerHTML = "0" + min;
  }
  if (min === "00") {
    lapMinute.innerHTML = min;
  }
  if (min > 9) {
    lapMinute.innerHTML = min;
  }
  // for laphr

  if (hr <= 9) {
    lapHour.innerHTML = "0" + hr;
  }
  if (hr === "00") {
    lapHour.innerHTML = hr;
  }
  if (hr > 9) {
    lapHour.innerHTML = hr;
  }
});
console.log(lapHour);
