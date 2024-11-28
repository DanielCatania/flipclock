import App from "../../../app.js";

export default class Control {
  static changeIsPaused(controlStaus) {
    controlStaus.setIsPaused(!controlStaus.getIsPaused());

    if (!controlStaus.getIsPaused()) App();

    return controlStaus.getIsPaused() ? "start" : "pause";
  }
}

export class ControlStaus {
  isPaused = false;

  getIsPaused() {
    return this.isPaused;
  }

  setIsPaused(newStatus) {
    this.isPaused = newStatus;
  }
}
