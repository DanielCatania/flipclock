import ClockService from "./assets/scripts/Clock/index.js";
import FlipAnimation from "./assets/scripts/FlipAnimation/index.js";
import ClockTypeManager from "./assets/scripts/ClockTypeManager/index.js";
import { ControlStaus } from "./assets/scripts/Control/index.js";

window.onload = function () {
  document.querySelector(".loading-overlay").style.display = "none";
};

const clock = new ClockService();
const manager = new ClockTypeManager();
export const controlStaus = new ControlStaus();
let timeoutID;

export default function App() {
  clearTimeout(timeoutID);
  const isPaused = controlStaus.getIsPaused();
  if (isPaused) return;

  const timeInMemory = clock.getTime();

  const time = manager.clock.getTime();
  clock.setTime(time);

  ClockService.updateClock(time, timeInMemory);

  FlipAnimation.addAllAnimation(clock.time, timeInMemory);

  timeoutID = setTimeout(App, 1000);
}

App();
