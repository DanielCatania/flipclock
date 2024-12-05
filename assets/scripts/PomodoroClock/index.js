import { controlStatus } from "../../../app.js";
import AudioControl from "../Audio/index.js";
import ClockTypeInterface from "../ClockTypeManager/interface.js";
import Control from "../Control/index.js";
import HandlerTime from "../HandlerTime/index.js";

export default class PomodoroClock extends ClockTypeInterface {
  static currentTime = null;
  static currentStage = "pomodoro";
  static setTimes = null;
  static numberOfPomodoros = 0;
  static initial = true;
  static $stageField = document.querySelector(".pomodoro_stage");

  static changeStage() {
    if (
      this.currentStage === "shortBreak" ||
      this.currentStage === "longBreak"
    ) {
      this.currentStage = "pomodoro";
    } else {
      this.numberOfPomodoros += 1;
      this.currentStage =
        this.numberOfPomodoros <= 3 ? "shortBreak" : "longBreak";
    }

    if (this.currentStage === "pomodoro")
      this.$stageField.innerHTML = `${this.currentStage}: ${this.numberOfPomodoros}`;
    else this.$stageField.innerHTML = this.currentStage;
  }

  static setInitialTimes(times) {
    this.currentTime = times.pomodoro;
    this.currentStage = "pomodoro";
    this.setTimes = times;
    this.numberOfPomodoros = 1;
    this.initial = true;
    this.$stageField.innerHTML = `${this.currentStage}: ${this.numberOfPomodoros}`;
  }

  static getTime() {
    if (!this.setTimes) return ["00", "00", "00"];

    if (this.initial) {
      this.initial = false;
      return this.currentTime;
    }

    const newTime = HandlerTime.timeDecrease(this.currentTime);

    this.currentTime = newTime;

    if (HandlerTime.timeInSeconds(newTime) === 0) {
      Control.changeIsPaused(controlStatus);
      AudioControl.break();
      this.initial = true;

      this.changeStage();

      this.currentTime = this.setTimes[this.currentStage];
    }

    return newTime;
  }
}

// pomodoro + short + pomodoro + short + pomdoro + short + pomodoro + long -> repeat
