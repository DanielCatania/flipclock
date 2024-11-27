import ClockTypeInterface from "../ClockTypeManager/interface.js";
import HandlerTime from "../HandlerTime/index.js";

class HourClock extends ClockTypeInterface {
  static getTime() {
    const date = new Date();

    const hours = HandlerTime.formatTime(date.getHours().toString());
    const minutes = HandlerTime.formatTime(date.getMinutes().toString());
    const seconds = HandlerTime.formatTime(date.getSeconds().toString());

    return [hours, minutes, seconds];
  }
}

export default HourClock;
