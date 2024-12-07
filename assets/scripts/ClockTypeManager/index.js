import HourClock from "../HourClock/index.js";
import TimerClock from "../TimerClock/index.js";
import PomodoroClock from "../PomodoroClock/index.js";

export default class ClockTypeManager {
  clock = null;

  constructor() {
    this.setClockType(this.getType());
  }

  getType() {
    const type = window.location.pathname;
    const formatedType = type.replace(/\//g, "");

    return formatedType;
  }

  setClockType(type) {
    switch (type) {
      case "timer":
        this.clock = TimerClock;
        break;
      case "pomodoro":
        this.clock = PomodoroClock;
        break;
      default:
        this.clock = HourClock;
    }
  }
}
