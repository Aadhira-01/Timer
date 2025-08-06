let countdown;

function startTimer() {
  clearInterval(countdown); // clear previous timer

  const minutesInput = document.getElementById("minutes").value;
  let time = minutesInput * 60; // convert to seconds

  const timerDisplay = document.getElementById("timer");

  countdown = setInterval(() => {
    let min = Math.floor(time / 60);
    let sec = time % 60;
    sec = sec < 10 ? "0" + sec : sec;
    timerDisplay.textContent = `${min}:${sec}`;
    time--;

    if (time < 0) {
      clearInterval(countdown);
      timerDisplay.textContent = "Time's Up!";
    }
  }, 1000);
}
