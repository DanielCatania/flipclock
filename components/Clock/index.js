class ClockService {
  time = ["00", "00", "00"];

  getTime() {
    return this.time;
  }

  setTime(newTime) {
    this.time = newTime;
  }

  static setClock(time, clockClass) {
    const $numbersFields = document.querySelectorAll(clockClass);

    if ($numbersFields.length !== 6) {
      const errorMessage = `Expected 6 elements with class '${clockClass}', but found ${$numbersFields.length}`;
      console.error(errorMessage);
      alert(
        "Estamos encontrando um problema de funcionamento, volte mais tarde!"
      );
      return errorMessage;
    }

    for (let i = 0; i < time.length; i++) {
      for (let j = 0; j < time[i].length; j++) {
        $numbersFields[i * 2 + j].innerHTML = time[i][j];
      }
    }
  }

  static setCurrentNumbers(time) {
    ClockService.setClock(time, ".current_number");
  }

  static setPreviousNumbers(time) {
    ClockService.setClock(time, ".previous_number");
  }

  static updateClock(newTime, previous_time) {
    ClockService.setCurrentNumbers(newTime);
    ClockService.setPreviousNumbers(previous_time);
  }
}

export default ClockService;
