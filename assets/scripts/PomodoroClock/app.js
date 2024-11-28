import { closePopUp } from "../PopUp/index.js";
import HandlerTime from "../HandlerTime/index.js";
import PomodoroClock from "./index.js";

const $startPomodoro = document.querySelector(".start_pomodoro");

const getInputsTime = (type) => {
  const hours = HandlerTime.formatTime(
    document.getElementById(`${type}-hours`).value
  );
  const minutes = HandlerTime.formatTime(
    document.getElementById(`${type}-minutes`).value
  );
  const seconds = HandlerTime.formatTime(
    document.getElementById(`${type}-seconds`).value
  );

  return [hours, minutes, seconds];
};

$startPomodoro.addEventListener("click", (e) => {
  e.preventDefault();
  const pomodoro = getInputsTime("pomodoro");
  const shortBreak = getInputsTime("short-break");
  const longBreak = getInputsTime("long-break");

  PomodoroClock.setInitialTimes({ pomodoro, shortBreak, longBreak });
  closePopUp();

  const $form = document.querySelector("form");
  $form.reset();
});
