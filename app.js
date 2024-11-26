import ClockService from "./components/Clock/index.js";
import FlipAnimation from "./components/FlipAnimation/index.js";
import HourClock from "./components/HourClock/index.js";

const clock = new ClockService();

function App() {
  const timeInMemory = clock.getTime();

  const time = HourClock.getTime();
  clock.setTime(time);

  ClockService.updateClock(time, timeInMemory);

  FlipAnimation.addAllAnimation(clock.time, timeInMemory);

  setTimeout(App, 1000);
}

App();
