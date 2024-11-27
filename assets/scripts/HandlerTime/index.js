class HandlerTime {
  static formatTime(time) {
    return String(time).padStart(2, "0");
  }

  static compareTimes(firstTime, secondTime) {
    let differents = [];
    for (let i = 0; i < firstTime.length; i++) {
      for (let j = 0; j < firstTime[i].length; j++) {
        if (firstTime[i][j] !== secondTime[i][j]) differents.push([i, j]);
      }
    }

    return differents;
  }

  static timeDecrease(time) {
    let [hours, minutes, seconds] = time.map((unit) => parseInt(unit));

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

    return newTime;
  }

  static timeInSeconds(time) {
    const seconds = parseInt(time[2]);
    const minutes = parseInt(time[1]);
    const hours = parseInt(time[0]);

    const minutesInSeconds = minutes * 60;
    const hoursInSeconds = hours * 60 * 60;

    return seconds + minutesInSeconds + hoursInSeconds;
  }
}

export default HandlerTime;
