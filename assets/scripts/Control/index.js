import App from "../../../app.js";

export default class Control {
  static changeIsPaused(controlStatus) {
    const $controlElement = document.querySelector(".control");

    controlStatus.setIsPaused(!controlStatus.getIsPaused());

    if (!controlStatus.getIsPaused()) App();

    $controlElement.innerHTML = controlStatus.getIsPaused() ? "start" : "pause";
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
