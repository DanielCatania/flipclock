import HourClock from "../HourClock/index.js";
import TimerClock from "../TimerClock/index.js";
import PomodoroClock from "../PomodoroClock/index.js";

export default class ClockTypeManager {
  clock = null;

  constructor() {
    this.setClockType(this.getType());
  }

  getType() {
    return window.location.pathname;
  }

  setClockType(type) {
    switch (type) {
      case "/timer.html":
        this.clock = TimerClock;
        break;
      case "/pomodoro.html":
        this.clock = PomodoroClock;
        break;
      default:
        this.clock = HourClock;
    }
  }
}
