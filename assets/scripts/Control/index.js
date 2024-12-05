import App from "../../../app.js";

export default class Control {
  static $controlElement = document.querySelector(".control");

  static changeIsPaused(controlStatus) {
    controlStatus.setIsPaused(!controlStatus.getIsPaused());

    if (!controlStatus.getIsPaused()) App();

    this.$controlElement.innerHTML = controlStatus.getIsPaused()
      ? "start"
      : "pause";
  }

  static disableControl() {
    this.$controlElement.innerHTML = null;
  }
}

export class ControlStatus {
  isPaused = false;

  getIsPaused() {
    return this.isPaused;
  }

  setIsPaused(newStatus) {
    this.isPaused = newStatus;
  }
}
