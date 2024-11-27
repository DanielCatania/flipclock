import ClockTypeInterface from "../ClockTypeManager/interface.js";

export default class TimerClock extends ClockTypeInterface {
  static initialTime = null;

  static setInitialTime(time) {
    this.initialTime = time;
  }

  static getTime() {
    if (!this.initialTime) return ["00", "00", "00"];

    return this.initialTime;
  }
}
