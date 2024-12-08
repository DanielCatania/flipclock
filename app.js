import ClockService from "./assets/scripts/Clock/index.js";
import FlipAnimation from "./assets/scripts/FlipAnimation/index.js";
import ClockTypeManager from "./assets/scripts/ClockTypeManager/index.js";
import { ControlStatus } from "./assets/scripts/Control/index.js";
import AudioControl from "./assets/scripts/Audio/index.js";
import HandlerTime from "./assets/scripts/HandlerTime/index.js";

window.onload = function () {
  document.querySelector(".loading-overlay").style.display = "none";
};

const clock = new ClockService();
const manager = new ClockTypeManager();
export const controlStatus = new ControlStatus();
let timeoutID;

document
  .querySelector(".sound_status")
  .addEventListener("click", AudioControl.changeIsMute);

export default function App() {
  clearTimeout(timeoutID);
  const isPaused = controlStatus.getIsPaused();
  if (isPaused) return;

  const timeInMemory = clock.getTime();

  const time = manager.clock.getTime();
  clock.setTime(time);

  ClockService.updateClock(time, timeInMemory);

  FlipAnimation.addAllAnimation(clock.time, timeInMemory);
  if (HandlerTime.timeInSeconds(timeInMemory) !== 0) AudioControl.flip();

  timeoutID = setTimeout(App, 1000);
}

App();
