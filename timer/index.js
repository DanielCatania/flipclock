import { closePopUp } from "../assets/components/PopUp/index.js";
import HandlerTime from "../assets/scripts/HandlerTime/index.js";
import TimerClock from "../assets/scripts/TimerClock/index.js";

const $startTimer = document.querySelector(".start_timer");

$startTimer.addEventListener("click", (e) => {
  e.preventDefault();
  const hours = HandlerTime.formatTime(document.getElementById("hours").value);
  const minutes = HandlerTime.formatTime(
    document.getElementById("minutes").value
  );
  const seconds = HandlerTime.formatTime(
    document.getElementById("seconds").value
  );

  const time = [hours, minutes, seconds];

  TimerClock.setInitialTime(time);
  closePopUp();

  const $form = document.querySelector("form");
  $form.reset();

  const $control = document.querySelector(".control");

  if ($control) $control.innerHTML = "pause";
});
