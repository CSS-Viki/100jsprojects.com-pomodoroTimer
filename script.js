const timer = document.getElementById("timer");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

let seconds = 60;
let minutes = 24;

// Variables for setInterval and timer status
let timerInterval = null;
let timerStatus = "stopped";

function countDown() {
  if (seconds === 0) {
    minutes--;
    seconds = 60;
  } else {
    seconds--;
    if (minutes === 0 && seconds === 0) {
      alert("Time ellapsed! Reset timer to start again");
      stopTimer();
    }
  }

  let m = minutes < 10 ? "0" + minutes.toString() : minutes;
  let s = seconds < 10 ? "0" + seconds.toString() : seconds;

  timer.innerHTML = m + ":" + s;//Display the timer to the DOM
}

function startTimer() {
  if (timerStatus === "stopped") {
    timerInterval = setInterval(countDown, 1000);
    timerStatus = "started";
  }
}

function stopTimer() {
  if (timerStatus === "started") {
    clearInterval(timerInterval);// To stop the timer
    timerStatus = "stopped";// To change the status
  }
}
function resetTimer() {
  clearInterval(timerInterval);
  let sec = parseInt("00");
  [minutes, seconds] = [25, sec];
  timer.innerHTML = `25:00`;
}

start.addEventListener("click", startTimer);
reset.addEventListener("click", resetTimer);
stop.addEventListener("click", stopTimer);
