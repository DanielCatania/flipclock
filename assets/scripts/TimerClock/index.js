import AudioControl from "../Audio/index.js";
import ClockTypeInterface from "../ClockTypeManager/interface.js";
import HandlerTime from "../HandlerTime/index.js";

export default class TimerClock extends ClockTypeInterface {
  static time = null;
  static initial = true;

  static setInitialTime(time) {
    this.time = time;
    this.initial = true;
  }

  static getTime() {
    if (!this.time) return ["00", "00", "00"];

    if (this.initial) {
      this.initial = false;
      return this.time;
    }

    const newTime = HandlerTime.timeDecrease(this.time);

    this.time = newTime;

    if (HandlerTime.timeInSeconds(newTime) === 0) {
      AudioControl.break();
      this.setInitialTime(null);
    }

    return newTime;
  }
}
