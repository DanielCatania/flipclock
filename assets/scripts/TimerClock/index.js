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

    let [hours, minutes, seconds] = this.time.map((unit) => parseInt(unit));

    if (seconds > 0) {
      seconds--;
    } else {
      seconds = 59;
      if (minutes > 0) {
        minutes--;
      } else {
        minutes = 59;
        if (hours > 0) {
          hours--;
        } else {
          hours = minutes = seconds = 0;
        }
      }
    }

    const newTime = [
      HandlerTime.formatTime(hours),
      HandlerTime.formatTime(minutes),
      HandlerTime.formatTime(seconds),
    ];

    this.time = newTime;

    if (((hours === minutes) === seconds) === 0) {
      this.setInitialTime(null);
    }

    return newTime;
  }
}
